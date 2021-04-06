import styles from "./LoginForm.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { isValidEmail } from "../lib/validate";

export function LoginForm() {
    const [enabled, setEnabled] = useState(false);

    const valid = {
        email: false,
        password: false,
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
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email Address"
                            onChange={(changed) => {
                                valid.email = isValidEmail(changed.target.value);
                            }}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter Password" />
                    </fieldset>
                </section>
                <section className={styles.actions}>
                    <button disabled={!enabled}>login</button>
                    <Link>Sign Up</Link>
                    <Link>Forgot Password</Link>
                </section>
            </form>
        </div>
    );
}
