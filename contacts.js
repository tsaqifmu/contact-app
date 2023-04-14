import { existsSync } from "node:fs";
import { readFileSync } from "node:fs";
import * as fs from "node:fs/promises";
import { rl } from "./index.js";

// make data folder
export const dirPath = "./data";
if (!existsSync(dirPath)) {
  fs.mkdir(dirPath);
}

// make contacs.json if not already there
export const dataPath = "./data/contacts.json";
if (!existsSync(dataPath)) {
  fs.writeFile(dataPath, "[]", "utf-8");
}

export const saveContacts = (name, noHp) => {
  const contact = { name, noHp };

  //read data folder first
  const file = readFileSync(dataPath, "utf-8");

  //change from string to json so it can be pushed
  const contacts = JSON.parse(file);

  // push to contacts
  contacts.push(contact);

  //write file into contacts.json
  fs.writeFile(dataPath, JSON.stringify(contacts));

  console.log(
    `Terimakasih ${contact.name} sudah menginputkan ${contact.noHp} `,
  );

  rl.close();
};
