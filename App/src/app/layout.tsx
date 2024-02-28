import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "RavenHelp",
  description: "Ferramentas Ravendawn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}