const fs = require("fs");
const dir = "./Images";

let result = fs.readdirSync(dir);
let length = result.length;

for (let i = 0; i < length; i++) {
  const filename = `N${(i + 1).toString().padStart(3, 0)}`;
  fs.rename(`${dir}/${result[i]}`, `${dir}/${filename}.png`, () => {});
}
