export function isValidEmail(email) {
    // console.log(`[isValidEmail] ${email} : ${email.length > 0} && ${email.includes("@")}`);
    return email.includes("@");
    // return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
}

export function isValidPassword(pw) {
    return pw.length > 3;
    // return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(pw);
}

/*
    /^
        (?=.*\d)          // should contain at least one digit
        (?=.*[a-z])       // should contain at least one lower case
        (?=.*[A-Z])       // should contain at least one upper case
        [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
    $/
*/
