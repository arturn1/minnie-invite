import type { Metadata } from "next";
import { Bonbon, Pacifico } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niver da Alicia",
  description: "Convite de aniversario para o dia 22/12",
};

const bonbon = Bonbon({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bonbon",

})

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bonbon.className} ${pacifico.className}`}>
        {children}
      </body>
    </html>
  );
}
