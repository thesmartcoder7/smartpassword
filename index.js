#!/usr/bin/env node

import clipboard from "clipboardy";
import { Command } from "commander";
import os from "os";
import * as fs from "fs";
import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const program = new Command();
const __dirname = dirname(fileURLToPath(import.meta.url));

// initializing the project with the different options
program
    .version("1.0.0")
    .description("simple random secure password generator")
    .option("-l , --length <number>", "length of password", "8")
    .option("-s , --save", "save the password to secrets.txt")
    .option("-nn , --no-numbers", "password to not include numbers")
    .option("-ns , --no-symbols", "password to not include symbols")
    .parse();

const { length, save, numbers, symbols } = program.opts();

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const integers = "0123456789";
const exCharacters = "!@#$%^&*_-=+";

const createPassword = (length, hasNumbers, hasSymbols) => {
    let chars = alpha;

    if (hasNumbers) {
        chars += integers;
    }

    if (hasSymbols) {
        chars += exCharacters;
    }

    return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
};

const savePassword = (password) => {
    fs.open(path.join(__dirname, "/", "passwords.txt"), "a", 777, (e, id) => {
        fs.write(id, password + os.EOL, null, "utf-8", () => {
            fs.close(id, () => {
                console.log("Password saved!!");
            });
        });
    });
};

// getitng the generated password.
const generatedPassword = createPassword(length, numbers, symbols);

if (save) {
    savePassword(generatedPassword);
}

clipboard.writeSync(generatedPassword);

console.log(generatedPassword);
