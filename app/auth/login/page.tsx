"use client";
import { handleLogin } from "@/actions/auth";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { FormEventHandler, useState } from "react";
import TextField from "../_components/text-field";
import { AuthError } from "next-auth";
import { toast } from "sonner";
import { buildFormData } from "@/utils/form-data";

const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const data = buildFormData(loginInfo);
    setLoading(true);
    try {
      await handleLogin(data);
      setTimeout(() => {
        router.push("/");
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log({ authErroraaaa: error });
        toast.error(error.message.split(".")[0]);
      }
    } finally {
      setLoading(false);
    }
  };

  const onChangeValue = (field: "email" | "password", value: string) => {
    setLoginInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login to our system
        </h1>
        <p className="text-muted-foreground text-sm">
          Enter your credentials below
        </p>
      </div>
      <div className="grid gap-6">
        <form onSubmit={onSubmit}>
          <div className="grid gap-6">
            <TextField
              type={"email"}
              value={loginInfo.email}
              onChange={(value) => {
                onChangeValue("email", value);
              }}
              label={"Email"}
              id={"login-email"}
            />

            <TextField
              type={"password"}
              value={loginInfo.password}
              onChange={(value) => {
                onChangeValue("password", value);
              }}
              label={"Password"}
              id={"login-password"}
            />

            <Button className="flex gap-2" disabled={isLoading}>
              {isLoading && <LoaderCircle className="animate-spin" />}
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
            <span className="bg-background text-muted-foreground px-2">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" type="button" disabled={isLoading}>
          Google Sign
        </Button>
      </div>
    </>
  );
};

export default LoginPage;
