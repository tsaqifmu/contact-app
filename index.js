import * as fs from "node:fs/promises";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const answer1 = await rl.question("Masukkan nama anda ");
const answer2 = await rl.question("Masukkan namor hp anda ");

console.log(`Terimakasih  ${answer1}, sudah menginputkan ${answer2}`);

rl.close();
