import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("数値を入力してください：", (line) => {
  const num = Number(line);
  console.log(num + 1000);
  rl.close();
});

// const num1 = Number(true);
// console.log(num1);
// const num2 = Number(false);
// console.log(num2);
// const num3 = Number(null);
// console.log(num3);
// const num4 = Number(undefined);
// console.log(num4);

// const bigint1 = BigInt("1234");
// console.log(bigint1);
// const bigint2 = BigInt(500);
// console.log(bigint2);
// const bigint3 = BigInt(true);
// console.log(bigint3);

// 他色々あったけど鬱の面倒だったので気になったのだけ
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean({})); // true（オブジェクトは全てtrue）