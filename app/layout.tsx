import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkyElite | Premium Private Jets",
  description:
    "Private aviation, made accessible. Discover a more considered way to fly with SkyElite.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
