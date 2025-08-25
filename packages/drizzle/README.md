# 🗄️ Database Package

Drizzle ORM + Neon Database による型安全なデータベース層

[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.44+-blue.svg)](https://orm.drizzle.team/)
[![Neon Database](https://img.shields.io/badge/Neon_Database-Serverless-green.svg)](https://neon.tech/)

## ✨ 特徴

- **🎯 型安全**: TypeScript 完全対応の ORM
- **⚡ 高速**: 軽量で高速なデータベース操作
- **🌍 Serverless**: Neon Database によるサーバーレス対応
- **🔄 マイグレーション**: 自動マイグレーション管理
- **📊 スキーマ**: 宣言的なスキーマ定義

## 🚀 インストール

```bash
pnpm add @workspace/drizzle
```

## 📦 エクスポート

```typescript
// データベース接続
import { db } from "@workspace/drizzle";

// スキーマ
import { users, posts, comments } from "@workspace/drizzle/schemas";

// ユーティリティ
import { createId, eq, desc, asc } from "@workspace/drizzle/utils";
```

## 🎯 使用方法

### 基本的なクエリ

```typescript
import { db } from "@workspace/drizzle";
import { users, posts } from "@workspace/drizzle/schemas";
import { eq, desc } from "@workspace/drizzle/utils";

// 全ユーザー取得
const allUsers = await db.select().from(users);

// 特定のユーザー取得
const user = await db.query.users.findFirst({
  where: eq(users.id, userId),
});

// ユーザー作成
const newUser = await db.insert(users).values({
  email: "user@example.com",
  name: "John Doe",
});

// リレーション付きクエリ
const userWithPosts = await db.query.users.findFirst({
  where: eq(users.id, userId),
  with: {
    posts: {
      orderBy: desc(posts.createdAt),
      limit: 10,
    },
  },
});
```

## 🏗️ スキーマ定義

```typescript
// packages/drizzle/src/schemas/users.ts
import { pgTable, text, timestamp, uuid, boolean } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").unique().notNull(),
  name: text("name").notNull(),
  image: text("image"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// 型定義
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
```

## 🔄 マイグレーション

```bash
# マイグレーションファイルを生成
pnpm db:generate

# データベースにマイグレーションを適用
pnpm db:migrate

# Drizzle Studioを起動
pnpm db:studio
```

## 🛠️ ユーティリティ

```typescript
import { createId } from "@workspace/drizzle/utils";

// CUID2によるID生成
const userId = createId();
const postId = createId();
```

---

**Database Package** - 型安全なデータベース層 🗄️
