import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MyQuokka - 외국인의 한국 생활, 더 쉽고 풍요롭게',
  description: 'MyQuokka는 한국에 거주하거나 방문하는 외국인들을 위한 종합 생활 지원 서비스입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 