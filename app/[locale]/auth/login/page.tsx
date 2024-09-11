"use client";
import { handleLogin } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { buildFormData } from "@/utils/form-data";
import { LoaderCircle } from "lucide-react";
import { FormEventHandler, useState } from "react";
import { toast } from "sonner";
import TextField from "../_components/text-field";
import { Link, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const t = useTranslations("Auth");

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
          {t("login.title")}
        </h1>
        <p className="text-muted-foreground text-sm">
          {t("login.description")}
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
              label={t("login.emailInput.label")}
              placeholder={t("login.emailInput.placeholder")}
              id={"login-email"}
            />

            <TextField
              type={"password"}
              value={loginInfo.password}
              onChange={(value) => {
                onChangeValue("password", value);
              }}
              label={t("login.passwordInput.label")}
              placeholder={t("login.passwordInput.placeholder")}
              id={"login-password"}
            />

            <Button className="flex gap-2" disabled={isLoading}>
              {isLoading && <LoaderCircle className="animate-spin" />}
              {t("login.loginButton")}
            </Button>
          </div>
        </form>
        <div className="text-center text-sm">
          {t("login.dontHaveAccount")}{" "}
          <Link
            className="text-blue-500 hover:underline"
            href={"/auth/register"}
          >
            {t("login.registerButton")}
          </Link>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-muted-foreground px-2">
              {t("orContinueWith")}
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
