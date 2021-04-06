import styles from "./PageHeader.module.scss";

export function PageHeader() {
    return (
        <header className={styles["page-header"]}>
            <h1>Stuff To Do</h1>
        </header>
    );
}
