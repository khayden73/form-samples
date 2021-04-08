export function OptionsForm() {
    return (
        <div className="options-form">
            <header>
                <h2>Select some options</h2>
            </header>
            <form>
                <section>
                    <fieldset>
                        <legend>Select Characters</legend>
                        <label>
                            Chewbacca
                            <input type="checkbox" value="yes" name="question1" checked={false} />
                        </label>
                    </fieldset>
                </section>
            </form>
        </div>
    );
}
