# ⚙️ TypeScript Configuration Package

モノレポ全体で共有する TypeScript 設定

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)

## ✨ 特徴

- **🔧 統一設定**: モノレポ全体で一貫した TypeScript 設定
- **📦 再利用可能**: 複数のプロジェクトで共有可能
- **🎯 最適化**: 各環境に最適化された設定
- **🔄 保守性**: 中央集権的な設定管理
- **📱 多様性**: Next.js、React、Node.js 対応

## 🚀 インストール

```bash
pnpm add -D @workspace/tsconfig
```

## 📦 利用可能な設定

### 基本設定

```json
{
  "extends": "@workspace/tsconfig/base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Next.js 設定

```json
{
  "extends": "@workspace/tsconfig/nextjs.json",
  "compilerOptions": {
    "plugins": [{ "name": "next" }]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### React 設定

```json
{
  "extends": "@workspace/tsconfig/react.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["dom", "dom.iterable", "es6"],
    "moduleResolution": "bundler"
  }
}
```

## 🔧 使用方法

### プロジェクトでの設定

#### フロントエンド (Next.js)

```json
{
  "extends": "@workspace/tsconfig/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@workspace/ui/*": ["../../packages/ui/src/*"],
      "@workspace/auth/*": ["../../packages/auth/src/*"]
    }
  }
}
```

#### バックエンド (Node.js)

```json
{
  "extends": "@workspace/tsconfig/base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "module": "ESNext",
    "moduleResolution": "node",
    "target": "ES2020",
    "lib": ["ES2020"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

#### パッケージ

```json
{
  "extends": "@workspace/tsconfig/base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,
    "declarationMap": true,
    "composite": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## 🎨 カスタマイズ

### 環境別設定

```json
// tsconfig.development.json
{
  "extends": "@workspace/tsconfig/base.json",
  "compilerOptions": {
    "sourceMap": true,
    "inlineSources": true,
    "removeComments": false
  }
}
```

```json
// tsconfig.production.json
{
  "extends": "@workspace/tsconfig/base.json",
  "compilerOptions": {
    "sourceMap": false,
    "removeComments": true,
    "noEmit": false
  }
}
```

### 厳格な設定

```json
// tsconfig.strict.json
{
  "extends": "@workspace/tsconfig/base.json",
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

---

**TypeScript Config Package** - 統一された TypeScript 設定 ⚙️
