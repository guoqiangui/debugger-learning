const fs = require("fs/promises");

(async function () {
  const fileContent = await fs.readFile("./package.json", {
    encoding: "utf-8",
  });

  await fs.writeFile("./package2.json", fileContent);
})();

function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
console.log(add(3, 4));
