import "./globals.css";

import { Suspense } from "react";

import ThemeRegistry from "./components/ThemeRegistry/ThemeRegistry";
import { ComponentWithChildren } from "./components/types";
import { roboto } from "./ui/font";

export const metadata = {
  title: "Brac API ACL Management",
  description: "Brac API ACL Management App",
};

export default function RootLayout({ children }: ComponentWithChildren) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ThemeRegistry>
          <Suspense>
            <div className="flex flex-col min-h-screen bg-gray-300 no-scrollbar">
              {children}
            </div>
          </Suspense>
        </ThemeRegistry>
      </body>
    </html>
  );
}
