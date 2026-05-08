import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vetly",
  description: "O app feito para quem ama seus pets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${dm.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}