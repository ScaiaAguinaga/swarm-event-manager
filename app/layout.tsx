import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Swarm - Event Manager",
  description: "Swarm is a platform for event management.",
  icons: { icon: "/assets/logo-placeholder-small.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={`${poppins.variable} bg-background-color text-white`}>
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
