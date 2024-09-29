import { AUTH_API } from "@/constants";
import { AuthError } from "next-auth";
import { RegisterData } from "../interfaces/auth";

export const login = async (email: string, password: string) => {
  console.log({ AUTH_API });
  try {
    const response = await fetch(`${AUTH_API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    return await response.json();
  } catch (error) {
    throw new AuthError("Failed to login");
  }
};

export const register = async (data: RegisterData) => {
  try {
    const response = await fetch(`${AUTH_API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
};
