"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { FC, ReactNode } from "react";

import StoreProvider from "../../providers/storeProvider";
import { AppLoader } from "../AppLoader";
import AppSnackbar from "../AppSnackbar";
import { AppDrawer } from "../SidePanel";
import ThemeRegistry from "../ThemeRegistry/ThemeRegistry";

export const AppContent: FC<{ children: ReactNode }> = ({ children }) => {
  const { status } = useSession();
  const router = useRouter();
  if (status == "unauthenticated") {
    router.push("/");
  }
  return status !== "authenticated" ? (
    <AppLoader />
  ) : (
    <ThemeRegistry>
      <main className="flex-grow">
        <StoreProvider>
          <AppDrawer>{children}</AppDrawer>
          <AppSnackbar />
        </StoreProvider>
      </main>
    </ThemeRegistry>
  );
};
