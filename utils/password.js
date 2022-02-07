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

    return chars;
};
