import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Focal point",
  description: "seu gerenciador de tarefas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
