import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Energy and Gas for US | Reliable Electricity & Natural Gas Plans",
  description: "Powering American homes with smarter energy choices. Compare electricity and natural gas plans, manage your account online.",
  keywords: "electricity plans, natural gas plans, energy provider, electricity provider",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
