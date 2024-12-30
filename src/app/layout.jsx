import localFont from "next/font/local";

import Header from "@/components/Header";
import vazirFont from "@/constants/localFont";
import "../styles/globals.css";

const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    template: "اپلیکیشن بلاگ | %s",
    default: "اپلیکیشن بلاگ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirFont.variable} ${geistMono.variable} font-sans min-h-screen`}
      >
        <Header />
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
