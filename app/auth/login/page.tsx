"use client";
import { handleLogin } from "@/actions/auth";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEventHandler, useState } from "react";

const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log("Submit");
    const data = new FormData();
    data.append("email", "shop1@gmail.com");
    data.append("password", "12345678");
    await handleLogin(data);
    router.push("/api/auth/session");
  };

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login to our system
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials below
        </p>
      </div>
      <div className="grid gap-6">
        <form onSubmit={onSubmit}>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>

            <div className="grid gap-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>

            <Button disabled={isLoading}>
              {isLoading && <LoaderCircle />}
              Sign In with Email
            </Button>
          </div>
        </form>
        <div className="text-center text-sm">
          Don't have an account?{" "}
          <Link
            className="text-blue-500 hover:underline"
            href={"/auth/register"}
          >
            Register now
          </Link>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? <LoaderCircle /> : <LoaderCircle />} GitHub
        </Button>
      </div>
    </>
  );
};

export default LoginPage;
