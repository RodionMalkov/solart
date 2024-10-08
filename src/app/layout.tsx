import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.scss";
import { Header } from "@/components/shared/Header/Header";
import { Container } from "@/components/shared/Container/Container";
import { Footer } from "@/components/shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`page ${inter.className}`}>
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
