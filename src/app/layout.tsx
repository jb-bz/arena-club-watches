import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArenaClub Watches | Luxury Watch Marketplace",
  description: "The premier marketplace for authenticated luxury watches in the vault.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
