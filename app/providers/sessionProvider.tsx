"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

import { Props } from "./types";

export default function NextAuthSessionProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
