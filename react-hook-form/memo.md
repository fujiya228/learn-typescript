## hundleSubmitでどうしてもESlintのエラーが出る

[react-hook-form](https://react-hook-form.com/)を使っていると、`handleSubmit`で`no-misused-promises`のエラーが出る。

hundleSubmitでどうしてもESLintに引っかかるので、ルールを変更
いくつかを見たが、解決できたのはルール変更のみ
- https://github.com/react-hook-form/react-hook-form/discussions/8622
- https://github.com/react-hook-form/react-hook-form/discussions/8020
- https://github.com/react-hook-form/react-hook-form/discussions/9325#discussioncomment-4060566

## react-hook-formで`input[number]`の値が未入力の時にnullにしたい

TODO

## データを変換するのはどのタイミングがいいのか？

TODO

## 用語メモ（公式見ればわかるけど、一度自分で理解してアウトプットした方が身につくと思うので）

- Controller
- watch
- handleSubmit
- register
- setValueAs
- valueAsNumber
- valueAsDate
- setValue
- useForm
- transformValue
- defaultValues
- resolver
  - yup
  - zod

## 使い方を体系的にまとめたい

TODO

## 記事メモ

- [React Hook Formハマりどころとベストプラクティス](https://zenn.dev/yodaka/articles/e490a79bccd5e2#%E5%88%9D%E3%82%81%E3%81%AB)