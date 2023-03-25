type T = {
  foo: number;
};

type S = {
  foo: number;
  bar: string;
};

let s: S = { foo: 123, bar: "hello" };

let t: T = s; // OK

// Error: Property 'bar' does not exist on type 'T'.
console.log(t.bar); // 代入はできるけど、プロパティアクセスはできない。