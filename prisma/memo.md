
## Find or create の例

```ts
const tags = ["tag1", "tag2", "tag3"];

const tagObjcts = await Promise.all(
  tags.map(async (word) => {
    return await ctx.prisma.tag.upsert({
      where: { word, },
      update: {},
      create: { word },
    })
  })
);
```

- おまけ：`Promise.all` で並列処理
- upsert は、`where` で指定した条件に合致するレコードがあれば、`update` で指定した内容で更新し、なければ `create` で指定した内容で新規作成する。
- updateを空にしているのは、`word` は変更しないから。これにより、find になる。