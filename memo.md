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
