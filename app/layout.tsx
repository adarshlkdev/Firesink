import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from '@vercel/speed-insights/next';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Firesink",
  description: "Cloud based storage for Documents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <Header />

             {children}


             <SpeedInsights />
             <Toaster position="bottom-center" />
             <Footer/>
          </ThemeProvider>
       
        </body>
      </html>
    </ClerkProvider>
    
  );
}
