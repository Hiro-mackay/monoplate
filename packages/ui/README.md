# 🎨 UI Component Library

shadcn/ui + Radix UI によるアクセシブルな React コンポーネントライブラリ

[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Latest-black.svg)](https://ui.shadcn.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-Latest-purple.svg)](https://www.radix-ui.com/)

## ✨ 特徴

- **🎨 美しいデザイン**: shadcn/ui ベースの洗練されたコンポーネント
- **♿ アクセシブル**: Radix UI による WAI-ARIA 準拠
- **🎯 型安全**: TypeScript 完全対応
- **🎨 カスタマイズ可能**: Tailwind CSS による柔軟なスタイリング
- **🌙 ダークモード**: 自動ダークモード対応

## 🚀 インストール

```bash
pnpm add @workspace/ui
```

## 📦 利用可能なコンポーネント

- **基本**: Button, Input, Label, Card, Badge
- **ナビゲーション**: Navigation Menu, Breadcrumb, Tabs, Pagination
- **フォーム**: Form, Checkbox, Radio Group, Select, Switch, Slider
- **フィードバック**: Alert, Dialog, Popover, Tooltip, Toast
- **レイアウト**: Accordion, Collapsible, Separator, Aspect Ratio
- **データ表示**: Table, Avatar, Progress, Calendar, Carousel

## 🎨 使用方法

```tsx
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";

export function ExampleForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>ログイン</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">メールアドレス</Label>
          <Input id="email" type="email" placeholder="example@email.com" />
        </div>
        <Button className="w-full">ログイン</Button>
      </CardContent>
    </Card>
  );
}
```

## 🌙 ダークモード

```tsx
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@workspace/ui/components/theme-toggle";

export function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        {/* アプリケーションコンテンツ */}
      </div>
    </ThemeProvider>
  );
}
```

## 🔧 コンポーネントの追加

```bash
# shadcn/uiからコンポーネントを追加
pnpm dlx shadcn@latest add button -c apps/web
```

---

**UI Library** - 美しい React コンポーネントライブラリ 🎨
