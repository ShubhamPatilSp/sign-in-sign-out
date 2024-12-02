import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "./context/auth";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grouple - Modern Authentication",
  description: "A modern authentication system built with Next.js",
  authors: [{ name: "Your Name" }],
  keywords: ["authentication", "next.js", "react", "typescript"],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
