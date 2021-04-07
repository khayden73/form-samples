import styles from "./LoginForm.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { isValidEmail, isValidPassword } from "../lib/validate";

export function LoginForm() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    // const [validated, setValidated] = useState(false);

    const handleChange = (event) => {
        setInputs(() => ({ ...inputs, [event.target.name]: event.target.value }));
        console.log("inputs: ", JSON.stringify(inputs));
        checkForm();
    };

    const checkForm = () => {
        Object.keys(inputs).forEach((key) => {
            console.log(`${key} = ${inputs[key]}`);
        });
    };

    return (
        <div className={styles["login-form"]}>
            <header>
                <h2>Login to access stuff</h2>
            </header>
            <form>
                <section>
                    <fieldset>
                        <label>Email</label>
                        {/*<Input
                            type="email"
                            name="email"
                            placeholder="Enter Email Address"
                            validator={(value) => {
                                valid.email = isValidEmail(value);
                            }}
                        />*/}
                        <input
                            type="email"
                            name="email"
                            value={inputs.email}
                            placeholder="Enter Email Address"
                            data-lpignore="true"
                            onChange={handleChange}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        {/*<Input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            validator={(value) => {
                                valid.password = isValidPassword(value);
                            }}
                        />*/}
                        {/*<input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            data-validated={valid.password}
                            data-error={form.password.length > 0 && !valid.password}
                            data-lpignore="true"
                            onChange={(changed) => {
                                setValid({ password: isValidPassword(changed.target.value) });
                            }}
                        />*/}
                    </fieldset>
                </section>
                <section className={styles.actions}>
                    <button>login</button>
                    <Link to="/">Sign Up</Link>
                    <Link to="/">Forgot Password</Link>
                </section>
            </form>
        </div>
    );
}
