import type { Metadata } from "next";
import { leagueSpartan } from "../../public/fonts/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calculator App",
  description: "Calculator App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${leagueSpartan.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
