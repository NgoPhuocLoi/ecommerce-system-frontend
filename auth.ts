import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

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
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(data) {
        const { email, password } = data;
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        // console.group({ response });
        if (!response.ok) return null;
        const metadata = (await response.json()).metadata;
        // console.log({ metadata });
        const { account, tokens } = metadata;
        const user: User = {
          id: account.id,
          name: account.firstName,
          email: account.email,
          tokens: tokens,
        };
        return user;
        // console.log({ data });
        // return null;
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    authorized: async ({ auth }) => {
      // console.log({ auth });
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
    jwt: async ({ token, user, trigger }) => {
      // console.log({ params });
      if (trigger === "signIn") {
        token.accessToken = user.tokens.accessToken;
        token.refreshToken = user.tokens.refreshToken;
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
      return session;
    },
  },
});
