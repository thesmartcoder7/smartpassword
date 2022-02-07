const program = require("commander");

program
    .version("1.0.0")
    .description("simple random secure password generator")
    .option("-l , --length <number>", "length of password", "8")
    .option("-s , --save", "save the password to secrets.txt")
    .option("-nn , --no-numbers", "password to not include numbers")
    .option("-ns , --no-symbols", "password to not include symbols")
    .parse();

console.log(program.opts());
