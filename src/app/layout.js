import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google clone",
  description: "Clone of google search by Alberto Enriquez project",
  };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='relative min-h-screen'>
        {children}
      <Footer />
      </body>
    </html>
  );
}
