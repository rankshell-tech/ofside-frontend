import './global.css';
import '../css/buttons.css';
import '../css/typography.css';
import '../css/variables.css';
import '../css/customForm.css';
import '../css/animations.css';
import '../css/tables.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ofside - Sports Venue Booking Platform',
  description: 'Book sports venues easily with Ofside - your go-to platform for finding and booking sports facilities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}