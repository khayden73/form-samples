import { Link } from "react-router-dom";
import styles from "./SiteNav.module.scss";

export function SiteNav() {
    return (
        <nav className={styles["site-nav"]}>
            <ul>
                <li>
                    <Link to="/login">Login Form</Link>
                </li>
                <li>
                    <Link to="/checks">Checkboxes and Radios</Link>
                </li>
            </ul>
        </nav>
    );
}
