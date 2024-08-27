"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import React, { FormEventHandler, useState } from "react";
import TextField from "../_components/text-field";

const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create your account
        </p>
      </div>
      <div className="grid gap-6">
        <form onSubmit={onSubmit}>
          <div className="grid gap-6">
            <TextField
              id="register-email"
              type={"email"}
              value={""}
              onChange={(e) => {
                console.log(e);
              }}
              label={"Email"}
              placeholder="yourmail@gmail.com"
            />

            <TextField
              id="register-password"
              type={"password"}
              value={""}
              onChange={(e) => {
                console.log(e);
              }}
              label={"Password"}
            />

            <TextField
              id="register-repeat-password"
              type={"password"}
              value={""}
              onChange={(e) => {
                console.log(e);
              }}
              label={"Repeat password"}
            />

            <Button disabled={isLoading}>
              {isLoading && <LoaderCircle />}
              Sign Up with Email
            </Button>
          </div>
        </form>
        <div className="text-center text-sm">
          Already has an account?{" "}
          <Link className="text-blue-500 hover:underline" href={"/auth/login"}>
            Login now
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
