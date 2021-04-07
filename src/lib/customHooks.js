import { useState } from "react";

export function useLoginForm(initialValues) {
    const [inputs, setInputs] = useState(initialValues);

    const handleInputChange = (event) => {
        event.persist();
        setInputs(() => ({ ...inputs, [event.target.name]: event.target.value }));
    };

    return {
        handleInputChange,
        inputs,
    };
}
