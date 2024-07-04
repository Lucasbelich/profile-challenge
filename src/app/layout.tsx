import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/Provider";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Profile-challenge",
  description: "profile-challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning>
        <ReduxProvider>
          <div>{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
