import './globals.css';
import './global.css';
import '../components/css/buttons.css';
import '../components/css/typography.css';
import '../components/css/variables.css';
import '../components/css/customForm.css';
import '../components/css/animations.css';
import '../components/css/tables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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