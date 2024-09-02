import type { Metadata } from "next";
import {  Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bomunto",
  description: "Agence de création de site web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />  
        {children}
      </body>
    </html>
  );
}
