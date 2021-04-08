import { useState } from "react";

export function useLoginForm(initialConfig) {
    // const [inputs, setInputs] = useState(initialValues);
    const [config, setConfig] = useState(initialConfig);

    const handleInputChange = (event) => {
        event.persist();
        const { name, value: inputValue } = event.target;
        const { validator } = config[name];
        setConfig(() => ({
            ...config,
            [name]: {
                error: inputValue.length > 0 && !validator(inputValue),
                value: inputValue,
                validator,
            },
        }));
    };

    const allowSubmit = () => {
        // if an error or value is empty, return false
        return !Object.keys(config).filter((key) => config[key].error || config[key].value.length === 0).length;
    };

    return {
        handleInputChange,
        allowSubmit: allowSubmit(),
        config,
    };
}

export function useCheckBoxes(initialConfig) {
    const [config, setConfig] = useState(initialConfig);

    const handleCheckboxChange = (event) => {
        const { name, value: inputValue, checked } = event.target;
        console.log("[handleCheckboxChange] %s [%s]: %o", name, inputValue, checked);
        setConfig(() => ({
            ...config,
            [inputValue]: {
                checked,
            },
        }));
    };

    return {
        handleCheckboxChange,
        config,
    };
}
