import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Chatting App",
  description: "Realtime Chat Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="bg-zinc-800 text-white">

          
          
              {children}
           
          </body>
    </html>
  );
}
