import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Sam Mata",
  description: "Sam Mata's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`subpixel-antialiased font-CalSans bg-subtle-grid bg-grid`}>
        {children}
      </body>
    </html>
  );
}
