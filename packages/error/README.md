# ⚠️ Error Handling Package

型安全で一貫性のあるエラーハンドリングシステム

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)

## ✨ 特徴

- **🎯 型安全**: TypeScript 完全対応のエラー型
- **🔧 一貫性**: 統一されたエラーハンドリングパターン
- **📝 詳細**: 豊富なエラー情報とコンテキスト
- **🌐 HTTP 対応**: HTTP ステータスコードとの統合
- **✅ バリデーション**: Zod スキーマとの連携

## 🚀 インストール

```bash
pnpm add @workspace/error
```

## 📦 エクスポート

```typescript
// 基本エラー
import { BaseError } from "@workspace/error/base";

// HTTPエラー
import {
  HttpError,
  BadRequestError,
  NotFoundError,
} from "@workspace/error/http";

// スキーマエラー
import { SchemaError, ValidationError } from "@workspace/error/schemas";

// エラーコード
import { ErrorCode, createErrorCode } from "@workspace/error/code";
```

## 🎯 使用方法

### 基本エラー

```typescript
import { BaseError } from "@workspace/error/base";

export class UserNotFoundError extends BaseError {
  constructor(userId: string) {
    super(`User with ID ${userId} not found`, {
      code: "USER_NOT_FOUND",
      context: { userId },
    });
  }
}

// エラーの使用
try {
  const user = await findUser(userId);
  if (!user) {
    throw new UserNotFoundError(userId);
  }
} catch (error) {
  if (error instanceof UserNotFoundError) {
    console.error("User not found:", error.message);
    console.error("Context:", error.context);
  }
}
```

### HTTP エラー

```typescript
import { BadRequestError, NotFoundError } from "@workspace/error/http";

export async function getUserHandler(req: Request) {
  try {
    const userId = req.params.userId;

    if (!userId) {
      throw new BadRequestError("User ID is required");
    }

    const user = await findUser(userId);
    if (!user) {
      throw new NotFoundError(`User with ID ${userId} not found`);
    }

    return Response.json(user);
  } catch (error) {
    if (error instanceof HttpError) {
      return Response.json(
        {
          error: error.message,
          code: error.code,
          context: error.context,
        },
        { status: error.statusCode }
      );
    }
  }
}
```

### スキーマバリデーションエラー

```typescript
import { z } from "zod";
import { ValidationError } from "@workspace/error/schemas";

const userSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(100),
});

export function validateUser(data: unknown) {
  try {
    return userSchema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError("User validation failed", {
        code: "USER_VALIDATION_ERROR",
        context: { data },
        details: error.errors,
      });
    }
    throw error;
  }
}
```

### エラーコード

```typescript
import { ErrorCode, createErrorCode } from "@workspace/error/code";

export const UserErrorCodes = {
  NOT_FOUND: createErrorCode("USER_NOT_FOUND", "User not found"),
  ALREADY_EXISTS: createErrorCode("USER_ALREADY_EXISTS", "User already exists"),
} as const;

export class UserNotFoundError extends BaseError {
  constructor(userId: string) {
    super(UserErrorCodes.NOT_FOUND.message, {
      code: UserErrorCodes.NOT_FOUND.code,
      context: { userId },
    });
  }
}
```

---

**Error Package** - 型安全なエラーハンドリング ⚠️
