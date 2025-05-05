import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BBYAGA – Bold, Queer-Inspired Fashion That Speaks Loud & Loves Hard",
  description:
    "BBYAGA creates unapologetically bold, queer-inspired fashion for outcasts, dreamers, and lovers. Based in Berlin, her maximalist designs spark joy, rebellion, and self-expression.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#4fcaa1]`}>
        <div className="fixed top-0 left-0 w-full h-[120vh] -z-10 overflow-hidden">
          {/* <img
            src="https://bbyaga-photos.s3.eu-north-1.amazonaws.com/1.jpg"
            alt="Background"
            className="w-full h-[120%] object-cover object-top -translate-y-10"
          /> */}
          <Image
            src="https://bbyaga-photos.s3.eu-north-1.amazonaws.com/1.jpg"
            alt="Background"
            fill
            className="object-cover object-top -translate-y-10"
          />
        </div>

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
