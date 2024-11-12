import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Banner from "@/components/common/Banner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Banner />
        <div className="fixed inset-0 z-[-5] bg-cover bg-center bg-white bg-opacity-80" />
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/BG2.jpg"
            alt="Background image"
            fill
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </div>
        {children}
      </body>
    </html>
  );
}
