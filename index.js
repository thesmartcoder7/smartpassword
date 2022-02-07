const program = require("commander");
const createPassword = require("./utils/password");

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

// getitng the generated password.
const generatedPassword = createPassword(length, numbers, symbols);

console.log(generatedPassword);
