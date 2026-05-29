import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AAVORide",
  description: "AAVORide outstation travel landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--page-background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
