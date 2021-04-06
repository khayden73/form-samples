import styles from "./LoginForm.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { isValidEmail, isValidPassword } from "../lib/validate";

export function LoginForm() {
    const [enabled, setEnabled] = useState(false);
    const [valid, setValid] = useState({
        email: false,
        password: false,
    });
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

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
                            data-validated={valid.email}
                            data-error={form.email.length > 0 && !valid.email}
                            data-lpignore="true"
                            onChange={(changed) => {
                                setValid({ email: isValidEmail(changed.target.value) });
                            }}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            data-validated={valid.password}
                            data-error={form.password.length > 0 && !valid.password}
                            data-lpignore="true"
                            onChange={(changed) => {
                                setValid({ password: isValidPassword(changed.target.value) });
                            }}
                        />
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
