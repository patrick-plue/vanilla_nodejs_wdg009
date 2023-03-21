// import { readFile } from "node:fs";

// readFile("test2.html", "utf-8", (err, data) => {
//   if (err) throw Error;
//   console.log(data);
// });

import { readFile } from "node:fs/promises";

try {
  const filePath = new URL("./test2.html", import.meta.url);
  const content = await readFile(filePath, { encoding: "utf-8" });
  console.log(content);
} catch (err) {
  console.log(err.message);
}
