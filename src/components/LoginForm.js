import styles from "./LoginForm.module.scss";
import { Link } from "react-router-dom";
import { useLoginForm } from "../lib/customHooks";
import { isValidEmail, isValidPassword } from "../lib/validate";

const formConfig = {
    email: {
        error: false,
        value: "",
        validator: isValidEmail,
    },
    password: {
        error: false,
        value: "",
        validator: isValidPassword,
    },
};

export function LoginForm() {
    const { handleInputChange, allowSubmit, config } = useLoginForm(formConfig);
    console.log("allowSubmit: ", allowSubmit);
    return (
        <div className={styles["login-form"]}>
            <header>
                <h2>Login to access stuff</h2>
            </header>
            <form>
                <section>
                    <fieldset>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={config.email.value}
                            data-error={config.email.error}
                            placeholder="Enter Email Address"
                            data-lpignore="true"
                            onChange={handleInputChange}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={config.password.value}
                            data-error={config.password.error}
                            placeholder="Enter Password"
                            data-lpignore="true"
                            onChange={handleInputChange}
                        />
                    </fieldset>
                </section>
                <section className={styles.actions}>
                    <button disabled={!allowSubmit}>login</button>
                    <Link to="/">Sign Up</Link>
                    <Link to="/">Forgot Password</Link>
                </section>
            </form>
        </div>
    );
}
