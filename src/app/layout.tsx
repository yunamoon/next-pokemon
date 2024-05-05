import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import back from "../../public/image/back.jpg";
import Header from "./components/header/header";

export const metadata: Metadata = {
  title: "Next Pokemon App",
  description: "Generated by yuna moon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}