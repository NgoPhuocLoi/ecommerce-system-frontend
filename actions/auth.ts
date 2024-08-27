"use server";

import { signIn } from "@/auth";

export const handleLogin = async (data: FormData) => {
  await signIn("credentials", data);
};
