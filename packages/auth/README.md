# 🔐 Authentication Package

Better Auth による堅牢な認証システム

[![Better Auth](https://img.shields.io/badge/Better_Auth-1.3+-blue.svg)](https://auth.better-auth.com/)

## ✨ 特徴

- **🔐 堅牢な認証**: Better Auth による安全な認証システム
- **🌐 マルチプロバイダー**: 複数の認証プロバイダー対応
- **🎯 型安全**: TypeScript 完全対応
- **⚡ 高速**: 軽量で高速な認証処理
- **🔒 セキュア**: セキュリティベストプラクティス準拠

## 🚀 インストール

```bash
pnpm add @workspace/auth
```

## 📦 エクスポート

```typescript
// クライアントサイド
import { useAuth, signIn, signOut } from "@workspace/auth/client";

// サーバーサイド
import { createAuth, getAuth } from "@workspace/auth/server";
```

## 🎯 使用方法

### クライアントサイド

```tsx
import { useAuth } from "@workspace/auth/client";

export function Profile() {
  const { user, isLoading, signIn, signOut } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <button onClick={() => signIn("github")}>Sign in</button>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

### サーバーサイド

```typescript
import { createAuth } from "@workspace/auth/server";
import { DrizzleAdapter } from "@workspace/drizzle";
import { db } from "@workspace/drizzle";

export const auth = createAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    {
      id: "github",
      type: "oauth",
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      config: {
        authorizationEndpoint: "https://github.com/login/oauth/authorize",
        tokenEndpoint: "https://github.com/login/oauth/access_token",
        userinfoEndpoint: "https://api.github.com/user",
        scope: "read:user user:email",
      },
    },
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});
```

### API Route (Next.js)

```typescript
// app/api/auth/[...auth]/route.ts
import { auth } from "@workspace/auth/server";

export const { GET, POST } = auth;
```

## 🔐 認証プロバイダー

### OAuth プロバイダー

```typescript
{
  id: "github",
  type: "oauth",
  clientId: process.env.GITHUB_CLIENT_ID!,
  clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  config: {
    authorizationEndpoint: "https://github.com/login/oauth/authorize",
    tokenEndpoint: "https://github.com/login/oauth/access_token",
    userinfoEndpoint: "https://api.github.com/user",
    scope: "read:user user:email",
  },
}
```

### Credentials プロバイダー

```typescript
{
  id: "credentials",
  type: "credentials",
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    // 認証ロジックを実装
    const user = await validateCredentials(credentials);
    return user;
  },
}
```

---

**Auth Package** - 堅牢な認証システム 🔐
