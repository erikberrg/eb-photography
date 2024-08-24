import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import { Inter_Tight, Lora, Noto_Sans } from "next/font/google";

const lora = Lora({
    subsets: ["latin"],
    variable: '--font-lora',
});
const inter = Inter_Tight({
    subsets: ["latin"],
    variable: '--font-inter',
});
const noto = Noto_Sans({
    subsets: ["latin"],
    variable: '--font-noto',
});


export const metadata: Metadata = {
  title: "Erik Berg Photography",
  description: "Photography Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${noto.variable} ${lora.variable}`}>
      <body>
        <Header/>
        {children}
        <Toaster />
        <Footer />
        </body>
    </html>
  );
}
