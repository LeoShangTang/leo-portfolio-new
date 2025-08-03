import "./globals.css";
import Image from "next/image";
import Banner from "@/components/common/Banner";
import MobileBanner from "@/components/common/MobileBanner";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/common/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <a href="#main-content" class="skip-to-main focus:rounded-md focus:outline-none sticky top-0 left-0 px-4 py-2 bg-transparent text-transparent text-lg font-bold focus:px-6 focus:py-3 focus:bg-primary focus:top-[65px] focus:left-4 focus:text-white">
            Skip to main content
        </a> */}
        <Banner />
        <MobileBanner />
        <div className="fixed inset-0 z-[-5] bg-cover bg-center bg-white bg-opacity-80" />
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/BG2.jpg"
            alt="Background image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
            }}
            placeholder="empty"
          />
        </div>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
