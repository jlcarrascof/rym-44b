const bcrypt = require('bcryptjs');
const { User } = require('../DB_connection');

const emailRegex = /^\S+@\S+\.\S+$/;

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing parameters' });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(403).json({ error: 'Invalid password' });
    }

    return res.status(200).json({ access: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = login;
