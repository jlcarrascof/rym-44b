const bcrypt = require('bcryptjs');
const { User } = require('../DB_connection');

const emailRegex = /^\S+@\S+\.\S+$/;

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing parameters' });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password: hashedPassword },
    });

    if (!created) {
      return res.status(409).json({ error: 'User already exists' });
    }

    return res.status(201).json({ id: user.id, email: user.email });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
