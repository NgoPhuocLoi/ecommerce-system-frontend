"use server";

import { signIn, signOut } from "@/auth";

export const handleLogin = async (data: FormData) => {
  await signIn("credentials", data);
};

export const logout = async () => {
  await signOut({
    redirectTo: "/auth/login",
  });
};
