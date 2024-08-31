import NextAuth, { AuthError, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./app/services/auth";
import { redirect } from "next/navigation";

declare module "next-auth" {
  interface User {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  }

  interface Session {
    accessToken: string;
    refreshToken: string;
    selectedShopId?: string;
  }
}

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: updateSession,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(data) {
        const { email, password } = data;

        const res = await login(email as string, password as string);

        if (!res.metadata || res.statusCode !== 200) {
          if (res.statusCode === 500) {
            throw new AuthError("Internal server error");
          }

          throw new AuthError(res.message);
        }

        const { account, tokens } = res.metadata;
        const user: User = {
          id: account.id,
          name: account.firstName,
          email: account.email,
          tokens: tokens,
        };
        return user;
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },

  session: {
    maxAge: 60 * 15, // 15 minutes
  },

  callbacks: {
    authorized: async ({ auth }) => {
      // console.log({ auth });
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
    jwt: async ({ token, user, trigger, session }) => {
      // console.log({ params });
      if (trigger === "signIn") {
        token.accessToken = user.tokens.accessToken;
        token.refreshToken = user.tokens.refreshToken;
      }

      if (trigger === "update" && session.selectedShopId) {
        token.selectedShopId = session.selectedShopId;
      }
      // token.accessToken = user.tokens.accessToken;
      // token.refreshToken = user.tokens.refreshToken;
      return token;
    },
    session: async ({ session, token }) => {
      // console.log({ paramsInSesson: params });
      // const session = { ...params.session };
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      if (token.selectedShopId) {
        session.selectedShopId = token.selectedShopId as string;
      }
      return session;
    },
  },
});
