import axios from "axios";
import { writeFile } from "fs/promises";

const { data } = await axios("https://www.google.com");

try {
  const promise = writeFile("google.html", data, "utf-8");
  await promise;
} catch (err) {
  console.log(err);
}
