# ON THE HAND ブログ画像リポジトリ

[tech.andhandworks.com](https://tech.andhandworks.com/) の旧記事に貼られていた画像のセルフホスト用リポジトリ。

過去に FC2 ブログだった時代の画像（`blog-imgs-*.fc2.com`）を、FC2 のサービス停止リスクに備えて GitHub Pages で配信し直すために作成。

## 構造

```
<post_id>/
└── <元のファイル名>.jpg
```

例: `https://onthehand.github.io/blog-images/8709629993119236971/usbhs.jpg`

## 配信

GitHub Pages（main branch / root）で配信。記事 HTML 側は `https://onthehand.github.io/blog-images/<post_id>/<filename>` 形式の URL を参照。
