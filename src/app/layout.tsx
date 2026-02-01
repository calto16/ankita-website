import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For My Dearest Ankita | A Pride and Prejudice Love Letter",
  description: "A romantic tribute inspired by Jane Austen's timeless love story, dedicated to the one who has bewitched me, body and soul.",
  keywords: ["love", "romance", "Pride and Prejudice", "Ankita"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
