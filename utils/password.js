const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-=+";

const createPassword = (length, hasNumbers, hasSymbols) => {
    let chars = alpha;

    if (hasNumbers) {
        chars += numbers;
    }

    if (hasSymbols) {
        chars += symbols;
    }

    return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
    let password = "";
    for (i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
};

module.exports = createPassword;
