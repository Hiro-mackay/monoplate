import { authClient } from "@workspace/auth/client";

// authClientのインスタンスをコンポーネントの外で作成
export const auth: ReturnType<typeof authClient> = authClient({
  baseUrl: "http://localhost:8787",
});
