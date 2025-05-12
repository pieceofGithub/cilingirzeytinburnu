import "./globals.css";
import React from "react";
import Providers from "./providers";

export const metadata = {
  title: "ÇilingirZeytinburnu.com",
  description: "7/24 Acil Çilingir Hizmeti - Zeytinburnu ve Çevresi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        {/* 
          Tüm sayfa içerikleri artık client-only Providers bileşeninde sarılıyor.
          Böylece server component’te createContext hatası asla çıkmaz.
        */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
