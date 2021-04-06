export function isValidEmail(email) {
    return email.includes("@");
}

export function isValidPassword(pw) {
    return pw.length > 4;
}
