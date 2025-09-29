import './globals.css';
import type { Metadata } from 'next';
import { Inter} from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';


const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});



export const metadata: Metadata = {
  title: 'Yetunde Morenikeji - Frontend Developer',
  description: 'Frontend Developer specializing in seamless user experiences and high-performance web applications',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${inter.variable} font-inter antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}