import { isAfter } from "date-fns";
import { jwtDecode } from "jwt-decode";
import { NextApiRequest } from "next";
import { AuthOptions } from "next-auth";
import CredentailsProvider from "next-auth/providers/credentials";

import { MAX_IDLE_TIME_IN_MINUTES } from "../../../config";
import { userLogin } from "../login";
import { renewToken } from "../refresh";

export const createOptions = (req: NextApiRequest): AuthOptions => ({
  session: {
    strategy: "jwt",
    maxAge: Number(MAX_IDLE_TIME_IN_MINUTES) * 60,
  },
  providers: [
    CredentailsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const data = credentials as {
          email: string;
          password: string;
        };
        try {
          const res = await userLogin(data);
          return res;
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      const authUser = (token as any).user as any;
      const tokenInfo =
        authUser?.accessToken && jwtDecode(authUser.accessToken);
      if (
        !!req.query?.update ||
        (tokenInfo &&
          tokenInfo.exp &&
          isAfter(new Date(), new Date(tokenInfo.exp * 1000)))
      ) {
        const { accessToken, refreshToken, user } = await renewToken(
          authUser.refreshToken
        );
        token.user = {
          ...user,
          ...{ accessToken, refreshToken },
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user as typeof session.user;
      (session as any).accessToken = (token.user as any).accessToken;
      (session as any).refreshToken = (token.user as any).refreshToken;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
});
