# 🌐 Web Application

Next.js 15 + React 19 によるモダンなフロントエンドアプリケーション

[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)

## ✨ 特徴

- **⚡ 高速開発**: Next.js 15 + Turbopack
- **🎨 美しい UI**: shadcn/ui + Radix UI
- **🌙 ダークモード**: Next Themes 対応
- **📱 レスポンシブ**: モバイルファーストデザイン
- **🔐 認証**: Better Auth 統合

## 🚀 開発

```bash
# 開発サーバー起動
pnpm dev

# ビルド
pnpm build

# リント
pnpm lint
```

## 🎨 UI コンポーネント

```bash
# コンポーネントを追加
pnpm dlx shadcn@latest add button -c apps/web
```

```tsx
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";

export default function HomePage() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

## 🔐 認証

```tsx
import { useAuth } from "@workspace/auth/client";

export default function Profile() {
  const { user, signIn, signOut } = useAuth();

  if (!user) {
    return <button onClick={signIn}>Sign In</button>;
  }

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

## 🎨 テーマ

```tsx
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@workspace/ui/components/theme-toggle";

export default function Layout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
      <ThemeToggle />
    </ThemeProvider>
  );
}
```

## 📱 レスポンシブデザイン

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card className="p-4">
    <h2 className="text-lg font-semibold">Card Title</h2>
    <p className="text-sm text-muted-foreground">Card content</p>
  </Card>
</div>
```

## 🚀 デプロイ

```bash
# Vercelにデプロイ
vercel --prod
```

---

**Web App** - モダンなフロントエンドアプリケーション 🌐
