'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* 로고 */}
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
            <span className="text-white font-bold">Q</span>
          </div>
          <span className="text-xl font-bold">MyQuokka</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/#info" className="text-neutral-4 hover:text-primary">
            정보 센터
          </Link>
          <Link href="/#services" className="text-neutral-4 hover:text-primary">
            서비스
          </Link>
          <Link href="/categories/housing" className="text-neutral-4 hover:text-primary">
            주거 및 공과금
          </Link>
          <Link href="/#community" className="text-neutral-4 hover:text-primary">
            커뮤니티
          </Link>
          <Link href="/#contact" className="text-neutral-4 hover:text-primary">
            문의하기
          </Link>
        </nav>

        {/* 로그인/회원가입 버튼 */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="btn-outline">
            로그인
          </Link>
          <Link href="/signup" className="btn-primary">
            회원가입
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button 
          className="md:hidden text-neutral-4" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-2">
          <div className="container mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/#info" className="text-neutral-4 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                정보 센터
              </Link>
              <Link href="/#services" className="text-neutral-4 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                서비스
              </Link>
              <Link href="/categories/housing" className="text-neutral-4 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                주거 및 공과금
              </Link>
              <Link href="/#community" className="text-neutral-4 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                커뮤니티
              </Link>
              <Link href="/#contact" className="text-neutral-4 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                문의하기
              </Link>
            </nav>
            
            <div className="flex flex-col space-y-2 mt-4">
              <Link href="/login" className="btn-outline w-full text-center" onClick={() => setIsMenuOpen(false)}>
                로그인
              </Link>
              <Link href="/signup" className="btn-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>
                회원가입
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 