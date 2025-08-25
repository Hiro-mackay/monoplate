"use client";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { auth } from "../lib/auth";

export default function Page() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");

  const handleSubmit = async (formData: FormData) => {
    if (mode === "login") {
      await handleLogin(formData);
    } else {
      await handleRegister(formData);
    }
  };

  const handleRegister = async (formData: FormData) => {
    await auth.signUp.email(
      {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        name: formData.get("name") as string,
      },
      {
        onSuccess: () => {
          router.push("/home");
        },
        onError: ({ error }) => {
          toast.error(error.message);
        },
      },
    );
  };

  const handleLogin = async (formData: FormData) => {
    await auth.signIn.email(
      {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      },
      {
        onSuccess: () => {
          router.push("/home");
        },
        onError: ({ error }) => {
          toast.error(error.message);
        },
      },
    );
  };

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Welcome </h1>

        <Tabs
          defaultValue="login"
          onValueChange={(value) => setMode(value as "login" | "register")}
        >
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
        </Tabs>

        <form action={handleSubmit} className="flex flex-col gap-2">
          {mode === "register" && (
            <Input name="name" placeholder="Name" required type="text" />
          )}
          <Input name="email" placeholder="Email" required type="email" />
          <Input
            name="password"
            placeholder="Password"
            required
            type="password"
          />
          <Button type="submit">
            {mode === "login" ? "Login" : "Register"}
          </Button>
        </form>
      </div>
    </div>
  );
}
