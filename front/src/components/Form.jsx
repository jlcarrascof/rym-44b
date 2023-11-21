function Form() {

    return <div>
        <form>
            <label htmlFor="email">
                Email:
                <input type="text" />
            </label>

            <label htmlFor="password">
                Password:
                <input type="text" />
            </label>

            <button>
                Submit
            </button>

        </form>           
    </div>
}

export default Form;
