// import { useState } from "react";
import PropTypes from "prop-types";

export function Input(props) {
    // const [valid, setValid] = useState(false);
    const changed = (target) => {
        /*if (typeof props.validator === "function") {
            setValid(props.validator(target.value));
        }*/
    };

    return (
        <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder || null}
            onChange={(event) => changed(event.target)}
            data-lpignore="true"
        />
    );
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    validator: PropTypes.func,
};
