# ⚡ API Server

Hono + Cloudflare Workers による高速なエッジ API サーバー

[![Hono](https://img.shields.io/badge/Hono-4.9+-blue.svg)](https://hono.dev/)
[![Cloudflare Workers](https://img.shields.io/badge/Workers-Latest-orange.svg)](https://workers.cloudflare.com/)

## ✨ 特徴

- **⚡ 高速**: Hono フレームワークによる軽量 API
- **🌍 エッジ**: Cloudflare Workers 対応
- **🗄️ データベース**: Drizzle ORM + Neon Database
- **🔐 認証**: Better Auth 統合
- **🎯 型安全**: TypeScript 完全対応

## 🚀 開発

```bash
# 開発サーバー起動
pnpm dev

# デプロイ
pnpm deploy

# 型定義生成
pnpm cf-typegen
```

## 🗄️ データベース

```typescript
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { users } from "@workspace/drizzle/schemas";

const sql = neon(env.DB_URL);
const db = drizzle(sql);

// ユーザー取得
app.get("/users", async (c) => {
  const allUsers = await db.select().from(users);
  return c.json(allUsers);
});
```

## 🔐 認証

```typescript
import { createAuth } from "@workspace/auth/server";

const auth = createAuth({
  // 認証設定
});

// 認証ミドルウェア
app.use("/api/*", auth.middleware);

// 保護されたルート
app.get("/api/protected", async (c) => {
  const user = c.get("user");
  return c.json({ message: `Hello, ${user.name}!` });
});
```

## 📡 API エンドポイント

```typescript
// ヘルスチェック
app.get("/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// エラーハンドリング
app.onError((err, c) => {
  console.error("Error:", err);
  return c.json({ error: "Internal Server Error" }, 500);
});
```

## 🚀 デプロイ

```bash
# Cloudflare Workersにデプロイ
pnpm deploy
```

---

**API Server** - 高速なエッジ API サーバー ⚡
