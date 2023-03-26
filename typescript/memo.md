## 1.3.5

以下で.tsファイルを保存するたびにコンパイルされるようになる。
```
tsc --watch
```

## 2.4.6

短絡評価の例
```
let y = x && getDefaultValue; // getDefaultValueは評価されない

fucntion getDefaultValue() {
  return 100;
}
```

## 3.1.2 オブジェクトリテラル（1）基本的な構文

プロパティ名と変数名が同じ場合は以下のように省略できる。
```
let x = 0;
let y = 0;

let obj = {
  x,
  y,
};
```

## 3.1.3 オブジェクトリテラル（2）プロパティ名の指定方法

以下のように`[式]`でプロパティ名を指定できる。

```
const propName = 'foo';
let obj = {
  [propName]: 123,
};

```

## 3.1.5 オブジェクトリテラル（3）スプレッド構文

オブジェクトの作成時に、既存のオブジェクトのプロパティを展開してコピーできる。

```
let obj1 = { foo: 123 };
let obj2 = { bar: 456 };

let clonedObj = { ...obj1 };
let mergedObj = { ...obj1, ...obj2 };
```

順番に注意する必要がある。
理由は、後から定義したプロパティが優先されるため。（展開するより前に定義していると、エラーになる）

```
let obj1 = { foo: 123, x: 0 };
let obj2 = { foo: 456, y: 0 };

let mergedObj = { ...obj1, ...obj2 }; // { foo: 456, x: 0, y: 0 }
```

## 3.1.6 オブジェクトはいつ”同じ”なのか

明示的にコピーしなければ、同じオブジェクトを参照している。

```
let obj1 = { foo: 123 };
let obj2 = obj1;

obj2.foo = 456;
console.log(obj1.foo); // 456
```

コピーの仕方は以下の通り。

```
let obj1 = { foo: 123 };
let obj2 = { ...obj1 };

obj2.foo = 456;
console.log(obj1.foo); // 123
```

※ 以下のように`Object.assign`を使う方法もあるが、`...`のスプレッド構文の方が簡潔である。

```
let obj1 = { foo: 123 };
let obj2 = Object.assign({}, obj1);

obj2.foo = 456;
console.log(obj1.foo); // 123
```

※ 以下のように`JSON.parse(JSON.stringify(obj))`を使う方法もあるが、`...`のスプレッド構文の方が簡潔である。

```
let obj1 = { foo: 123 };
let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.foo = 456;
console.log(obj1.foo); // 123
```

※ 以下のように`Object.create`を使う方法もあるが、`...`のスプレッド構文の方が簡潔である。

```
let obj1 = { foo: 123 };
let obj2 = Object.create(obj1);

obj2.foo = 456;
console.log(obj1.foo); // 123
```

※ 他にも色々ある（copy、clone、deep copy、shallow copyなど）

## 3.2.1 オブジェクト型の記法

以下のように、オブジェクトの型を定義できる。
前半が型、後半がオブジェクトリテラル。

```
let obj: {
  foo: number;
  bar: string;
} = {
  foo: 123,
  bar: 'hello',
};
```

## 3.2.3 type文で型に別名をつける

以下のように、型に別名をつけることができる。

```
type MyObj = {
  foo: number;
  bar: string;
};

let obj: MyObj = {
  foo: 123,
  bar: 'hello',
};
```

- 別名をつける流ことで、型の定義を共通化できる。
- 宣言はどこでもいい。（コンパイル時に、型の定義が展開されるため）
- プリミティブ型にも別名をつけることができる。

## 3.2.4 interface宣言でオブジェクト型を宣言する

以下のように、`interface`を使ってオブジェクト型を宣言できる。

```
interface MyObj {
  foo: number;
  bar: string;
}

let obj: MyObj = {
  foo: 123,
  bar: 'hello',
};
```

- `type`と`interface`の違いは、`interface`は拡張できること。
- `interface`のほとんどは、`type`で代用できる。 => `type`のみを使う流儀もある。

## 3.2.5 インデックスシグネチャ

以下のように、インデックスシグネチャを使うことで、任意のプロパティを定義できる。

```
type MyObj {
  foo: number;
  bar: string;
  [key: string]: boolean;
}

let obj: MyObj = {
  foo: 123,
  bar: 'hello',
  baz: true,
};
```

- ※TypeScriptが保証する型安全性を破壊することになるので、注意が必要。

## 3.2.6 オプショナルプロパティ

以下のように、`?`をつけることで、オプショナルプロパティを定義できる。

```
type MyObj {
  foo: number;
  bar?: string;
}

let obj1: MyObj = {
  foo: 123,
};

let obj2: MyObj = {
  foo: 123,
  bar: 'hello',
};
```


## 3.2.7 読み取り専用プロパティの宣言

以下のように、`readonly`をつけることで、読み取り専用プロパティを定義できる。

```
type MyObj {
  readonly foo: number;
}

let obj: MyObj = {
  foo: 123,
};

obj.foo = 456; // エラー
```

## 3.2.8 typeofキーワードで変数の型を得る

以下のように、`typeof`を使うことで、変数の型を得ることができる。

```
let num: number = 123,

type NumType = typeof num; // number

const foo: NumType = 456; // OK
```

## 3.3.1 部分型とは

部分型とは、2つの方の互換性を表す概念。
型Sが型Tの部分型であるとは、型Sの値は型Tの値でもあることを意味する。

```
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
```

- 逆に感じるんよな、、、。集合の部分集合をイメージしてしまって。
- 代入はできるけど、プロパティアクセスはできない。 => これは、`t`の型が`T`なので、`bar`プロパティにアクセスできないという意味。
- 簡単にいうと、S型はT型の上位互換。（上位互換 == 部分型）
- 構造的部分型という。
- 他の言語だと、名前的部分型というものもある。（明示的に宣言されたものだけが部分型と見なされる）

## 3.2.2 プロパティの包含関係による部分型関係の発生

部分型関係の発生条件

1. Tが持つプロパティは全てSにも存在する
2. 条件1のプロパティについて、Sにおけるそのプロパティの型はTにおけるプロパティの型の部分型（or同じ型）である

## 3.3.3 余剰プロパティに対する型エラーについて

```
// 以下は部分型なので問題ないはず
type User = { name: string, age: number }

const u: User = {
  name: 'bob',
  age: 26,
  telNumber: '09011112222',
}
```

- プログラマーのミスを防ぐためにある
- オブジェクトリテラルの時のみに発生する
