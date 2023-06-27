import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Vl from "@/components/ui/Vl";
import Image from "next/image";
import MainHeader from "@/components/MainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#202124] text-white flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
