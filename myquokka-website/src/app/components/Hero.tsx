'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="bg-white rounded-card p-8 md:p-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-4">
            외국인의 한국 생활, 더 쉽고 풍요롭게
          </h1>
          <p className="text-lg md:text-xl text-neutral-3 mb-2 max-w-3xl mx-auto">
            MyQuokka는 한국에 거주하거나 방문하는 외국인들을 위한 종합 생활 지원 서비스입니다.
          </p>
          <p className="text-lg md:text-xl text-neutral-3 mb-10 max-w-3xl mx-auto">
            언어, 행정, 문화적 장벽을 넘어 더 나은 한국 생활을 경험하세요.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/get-started" className="btn-primary text-lg px-8 py-3">
              시작하기
            </Link>
            
            <div className="flex items-center border border-neutral-2 rounded-full px-4 py-2">
              <button className="px-2 font-medium">EN</button>
              <span className="text-neutral-2">|</span>
              <button className="px-2 font-medium text-primary">KO</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 