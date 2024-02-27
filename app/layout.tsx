import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Navigation from "./components/navigation";
import "./globals.css";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Rick and Morty website built by Tami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
