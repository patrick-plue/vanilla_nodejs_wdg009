// const fs = require("fs");

// fs.writeFile("test.html", "hello", (err) => {
//   if (err) throw Error;
//   console.log("successfull");
// });

// import { writeFile } from "node:fs";

// writeFile("test.html", "Hello Node.js", "utf-8", () => {
//   console.log("successfull");
// });

import { writeFile } from "node:fs/promises";

try {
  const promise = writeFile("test2.html", "hello again", "utf-8");

  await promise;
} catch (error) {
  console.log(error);
}
