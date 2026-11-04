"use client";
{
  /**  import { Toaster } from "sonner"*/
}
{
  /** import { usePathname } from "next/navigation";*/
}
import Header from "../components/header/Header";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
