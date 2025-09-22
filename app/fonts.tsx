import { Merienda } from "next/font/google";
import { DM_Sans, Glass_Antiqua, Inter } from "next/font/google";

export const MeriedaFont = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  display: "swap",
});

export const Sans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dmsans',
  display: 'swap',
});

export const Glass = Glass_Antiqua({ 
  subsets: ['latin'],
  variable: '--font-glassantiqua',
  display: 'swap',
  weight: ["400"]
});

export const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});