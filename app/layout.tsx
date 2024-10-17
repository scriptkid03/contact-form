import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const karlaItalic = localFont({
  src: "/fonts/Karla-Italic-VariableFont_wght.ttf",
  variable: "--font-karla-italic",
  weight: "100 900",
});

const karlaRegular = localFont({
  src: "/fonts/Karla-VariableFont_wght.ttf",
  variable: "--font-karla-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Contact Form",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karlaItalic.variable} ${karlaRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
