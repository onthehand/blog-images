# ON THE HAND ブログ画像リポジトリ

[tech.andhandworks.com](https://tech.andhandworks.com/) の旧記事に貼られていた画像のセルフホスト用リポジトリ。

過去に FC2 ブログだった時代の画像（`blog-imgs-*.fc2.com`）を、FC2 のサービス停止リスクに備えて GitHub Pages で配信し直すために作成。

## 構造

```
tech/<post_id>/<ファイル名>   # BlogGen（tech / tech-en の記事）。2026-11 に直下から移行（PR #1）
hreflang/                     # BlogGen の hreflang サイトマップ
promo/                        # 共用素材
travel/ など                  # ほかの worker の画像（各 worker が管理）
```

BlogGen の画像は `tech/` の下に置く（`scripts/add_image.py`）。直下にあった BlogGen の 39 フォルダは
`tech/` へ移したあと削除した（BlogGen#119）。直下に残っている数字のフォルダはほかの worker のもの。

例: `https://onthehand.github.io/blog-images/tech/8709629993119236971/usbhs.jpg`

## 配信

GitHub Pages（main branch / root）で配信。BlogGen の記事 HTML は `https://onthehand.github.io/blog-images/tech/<post_id>/<filename>` 形式の URL を参照する。
