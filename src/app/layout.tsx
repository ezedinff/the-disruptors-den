import type { Metadata } from "next";
import { Inter, Darker_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const darker_Grotesque = Darker_Grotesque({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "TDD",
  description: "Official Site Of The Disruptors Den Community",
  icons: [
    {
      url: "/next.svg",
      sizes: "16x16",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={darker_Grotesque.className}>{children}
      </body>
    </html>
  );
}
