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