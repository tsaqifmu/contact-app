import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { saveContacts } from "./contacts.js";

//make readline interface
export const rl = readline.createInterface({ input, output });

// make some readline question
const name = await rl.question("Masukkan nama anda ");
const noHp = await rl.question("Masukkan nomor hp anda ");

saveContacts(name, noHp);


