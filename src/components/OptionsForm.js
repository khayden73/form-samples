import cn from "classnames";
import styles from "./OptionsForm.module.scss";

export function OptionsForm() {
    const formCss = cn(styles["form-container"], styles["options-form"]);
    return (
        <div className={formCss}>
            <header>
                <h2>Select some options</h2>
            </header>
            <form>
                <section className={styles["form-fields"]}>
                    <fieldset className={styles["checkbox-group"]}>
                        <legend>Select Characters</legend>
                        <label className={styles["styled-checkbox"]}>
                            <input
                                type="checkbox"
                                value="Chewbacca"
                                name="characters"
                                checked={false}
                                hidden={true}
                                aria-hidden={false}
                            />
                            <span>Chewbacca</span>
                        </label>
                        <label className={styles["styled-checkbox"]}>
                            <input
                                type="checkbox"
                                value="Chewbacca"
                                name="characters"
                                checked={false}
                                hidden={true}
                                aria-hidden={false}
                            />
                            <span>Han Solo</span>
                        </label>
                        <label className={styles["styled-checkbox"]}>
                            <input
                                type="checkbox"
                                value="Chewbacca"
                                name="characters"
                                checked={false}
                                hidden={true}
                                aria-hidden={false}
                            />
                            <span>Lando Calrissian</span>
                        </label>
                        <label className={styles["styled-checkbox"]}>
                            <input
                                type="checkbox"
                                value="Chewbacca"
                                name="characters"
                                checked={false}
                                hidden={true}
                                aria-hidden={false}
                            />
                            <span>Leia Organa</span>
                        </label>
                    </fieldset>
                </section>
            </form>
        </div>
    );
}
