import { cookies } from "next/headers";
import clsx from "clsx";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@amvasdev - usehooks",
  description:
    "Custom hooks for your React Applications, created by @amvasdev | usehooks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();

  return (
    <html lang="en" data-theme={cookieStore.get("theme")}>
      <body
        className={clsx(montserrat.className, "min-h-svh w-full bg-base-100")}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
