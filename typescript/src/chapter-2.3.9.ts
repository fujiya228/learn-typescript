import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("文字列を入力してください：", (line) => {
//   console.log(`${line} が入力されました`);
//   rl.close();
// });

// rl.question("数値を入力してください：", (line) => {
//   console.log(line + 1000);
//   rl.close();
// });

rl.question("数値を入力してください：", (line) => {
  const result = line + 1000;
  console.log(result);
  rl.close();
});