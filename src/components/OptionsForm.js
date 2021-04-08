import cn from "classnames";
import styles from "./OptionsForm.module.scss";
import { useCheckBoxes } from "../lib/customHooks";

const checkboxConfig = {
    Chewbacca: {
        checked: false,
    },
    "Han Solo": {
        checked: false,
    },
    "Leia Organa": {
        checked: false,
    },
    "Lando Calrissian": {
        checked: false,
    },
};

export function OptionsForm() {
    const { handleCheckboxChange, config } = useCheckBoxes(checkboxConfig);
    const formCss = cn(styles["form-container"], styles["options-form"]);
    const hide = false;
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
                                checked={config["Chewbacca"].checked}
                                hidden={hide}
                                aria-hidden={false}
                                onChange={handleCheckboxChange}
                            />
                            <span>Chewbacca</span>
                        </label>
                        <label className={styles["styled-checkbox"]}>
                            <input
                                type="checkbox"
                                value="Han Solo"
                                name="characters"
                                checked={config["Han Solo"].checked}
                                hidden={hide}
                                aria-hidden={false}
                                onChange={handleCheckboxChange}
                            />
                            <span>Han Solo</span>
                        </label>
                        <label className={styles["styled-checkbox"]}>
                            <input
                                type="checkbox"
                                value="Lando Calrissian"
                                name="characters"
                                checked={config["Lando Calrissian"].checked}
                                hidden={hide}
                                aria-hidden={false}
                                onChange={handleCheckboxChange}
                            />
                            <span>Lando Calrissian</span>
                        </label>
                        <label className={styles["styled-checkbox"]}>
                            <input
                                type="checkbox"
                                value="Leia Organa"
                                name="characters"
                                checked={config["Leia Organa"].checked}
                                hidden={hide}
                                aria-hidden={false}
                                onChange={handleCheckboxChange}
                            />
                            <span>Leia Organa</span>
                        </label>
                    </fieldset>
                </section>
            </form>
        </div>
    );
}
