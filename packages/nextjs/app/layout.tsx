import "@rainbow-me/rainbowkit/styles.css";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";
import { Montserrat as FontSans } from "next/font/google";
import { cn } from "~~/~/lib/utils";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = getMetadata({
  title: "AgroVest",
  description: "Tokenize your business, attract investors, while showcasing your products on a thriving marketplace. ",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen antialiased bg-white",
        fontSans.variable
      )}>
        <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
