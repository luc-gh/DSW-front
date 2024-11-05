import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display:'swap',
});

export const metadata: Metadata = {
  title: "AcolhePet",
  description: "Adote Amor, Mude uma Vida!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body className={`bg-[#FDE4C6]`}>{children}</body>
    </html>
  );
}
