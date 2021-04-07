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

    return {
        handleInputChange,
        config,
    };
}
