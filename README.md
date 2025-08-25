# 🚀 Monoplate

モダンなフルスタック Web アプリケーション開発のためのモノレポテンプレート

[![Node.js](https://img.shields.io/badge/Node.js-22+-green.svg)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-10.15.0-blue.svg)](https://pnpm.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)

## ✨ 特徴

- **🚀 高速開発**: Turbo + pnpm による最適化されたモノレポ
- **🎨 美しい UI**: shadcn/ui + Radix UI によるアクセシブルなコンポーネント
- **🔐 認証システム**: Better Auth による堅牢な認証機能
- **🗄️ データベース**: Drizzle ORM + Neon Database
- **⚡ エッジランタイム**: Cloudflare Workers 対応

## 🚀 クイックスタート

```bash
# リポジトリをクローン
git clone <your-repo-url>
cd monoplate

# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm dev
```

## 🏗️ アーキテクチャ

```
monoplate/
├── apps/
│   ├── web/          # Next.js 15 + React 19 フロントエンド
│   └── api/          # Hono + Cloudflare Workers API
├── packages/
│   ├── ui/           # shadcn/ui コンポーネントライブラリ
│   ├── auth/         # Better Auth 認証システム
│   ├── drizzle/      # Drizzle ORM データベース層
│   ├── error/        # エラーハンドリングユーティリティ
│   └── tsconfig/     # 共有TypeScript設定
```

## 📦 利用可能なスクリプト

```bash
pnpm dev          # 開発サーバー起動
pnpm build        # ビルド
pnpm lint         # リント
pnpm format       # フォーマット
pnpm typecheck    # 型チェック
```

## 🎨 UI コンポーネントの追加

```bash
# webアプリにコンポーネントを追加
pnpm dlx shadcn@latest add button -c apps/web
```

## 📚 技術スタック

- **フロントエンド**: Next.js 15, React 19, shadcn/ui, Tailwind CSS
- **バックエンド**: Hono, Cloudflare Workers, Better Auth
- **データベース**: Drizzle ORM, Neon Database
- **開発ツール**: Turbo, Biome, TypeScript, pnpm

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成
3. 変更をコミット
4. プルリクエストを作成

---

**Monoplate** - モダンなフルスタック開発のための最適なテンプレート 🚀
