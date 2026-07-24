import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCAUR | Supply for elevated stays.",
  description:
    "Considered supply for hospitality spaces, beginning with wooden acoustic wall panels.",
  openGraph: {
    title: "ARCAUR | Supply for elevated stays.",
    description: "Considered supply for hospitality spaces.",
    images: [{ url: "/og.png", width: 1728, height: 907, alt: "ARCAUR hospitality supply" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARCAUR | Supply for elevated stays.",
    description: "Considered supply for hospitality spaces.",
    images: ["/og.png"],
  },
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
