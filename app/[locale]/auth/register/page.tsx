"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import React, { FormEventHandler, useState } from "react";
import TextField from "../_components/text-field";
import { toast } from "sonner";
import { buildFormData } from "@/utils/form-data";
import { useRouter } from "next/navigation";
import { register } from "@/app/services/auth";

type RegisterField =
  | "email"
  | "password"
  | "confirmPassword"
  | "firstName"
  | "lastName";

const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (registerInfo.password !== registerInfo.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      return;
    }
    setLoading(true);
    try {
      const res = await register(registerInfo);

      if (res.statusCode === 201) {
        toast.success("Account created successfully");
        return router.push("/auth/login");
      }

      if (res.errors.length > 0) {
        res.errors.forEach((error: { path: string; msg: string }) => {
          setErrors((prev) => ({
            ...prev,
            [error.path]: error.msg,
          }));
        });
      } else {
        setErrors((prev) => ({
          ...prev,
          email: res.message,
        }));
      }

      // router.push("/auth/login");
    } catch (error) {
      if (error instanceof Error) {
        console.log({ authErroraaaa: error });
        toast.error(error.message.split(".")[0]);
      }
    } finally {
      setLoading(false);
    }
  };

  const resetErrors = (field: RegisterField) => {
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const onChangeValue = (field: RegisterField, value: string) => {
    resetErrors(field);
    setRegisterInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-muted-foreground text-sm">
          Enter your email below to create your account
        </p>
      </div>
      <div className="grid gap-6">
        <form onSubmit={onSubmit}>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <TextField
                id="register-firstname"
                type={"text"}
                value={registerInfo.firstName}
                onChange={(value) => {
                  onChangeValue("firstName", value);
                }}
                label={"First Name"}
                error={errors.firstName}
              />
              <TextField
                id="register-lastName"
                type={"text"}
                value={registerInfo.lastName}
                onChange={(value) => {
                  onChangeValue("lastName", value);
                }}
                label={"Last name"}
                error={errors.lastName}
              />
            </div>

            <TextField
              id="register-email"
              type={"email"}
              value={registerInfo.email}
              onChange={(value) => {
                onChangeValue("email", value);
              }}
              label={"Email"}
              placeholder="yourmail@gmail.com"
              error={errors.email}
            />

            <TextField
              id="register-password"
              type={"password"}
              value={registerInfo.password}
              onChange={(value) => {
                onChangeValue("password", value);
              }}
              label={"Password"}
              error={errors.password}
            />

            <TextField
              id="register-repeat-password"
              type={"password"}
              value={registerInfo.confirmPassword}
              onChange={(value) => {
                onChangeValue("confirmPassword", value);
              }}
              label={"Confirm password"}
              error={errors.confirmPassword}
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
            <span className="bg-background text-muted-foreground px-2">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" type="button" disabled={isLoading}>
          Google
        </Button>
      </div>
    </>
  );
};

export default LoginPage;
