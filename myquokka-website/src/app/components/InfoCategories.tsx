'use client';
import Link from 'next/link';

export default function InfoCategories() {
  const categories = [
    { name: '주거 및 공과금', icon: '🏠', link: '/categories/housing' },
    { name: '교통 및 주차', icon: '🚗' },
    { name: '일상 생활', icon: '🛒' },
    { name: '언어 및 소통', icon: '💬' },
    { name: '행정 절차', icon: '📝' },
    { name: '의료 서비스', icon: '🏥' },
    { name: '문화 및 적응', icon: '🎭' },
    { name: '취업 및 직장', icon: '💼' },
    { name: '긴급 상황', icon: '🚨' },
    { name: '자녀 교육', icon: '🎓' },
  ];

  return (
    <section id="info" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">한국 생활 필수 정보</h2>
        <p className="section-subtitle">10개 카테고리로 체계화된 한국 생활 필수 정보를 확인하세요</p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            category.link ? (
              <Link 
                key={index} 
                href={category.link}
                className="bg-neutral-1 rounded-lg p-4 flex flex-col items-center justify-center text-center min-h-[120px] hover:shadow-md transition-shadow cursor-pointer"
              >
                <span className="text-3xl mb-2">{category.icon}</span>
                <span className="font-semibold">{category.name}</span>
              </Link>
            ) : (
              <div 
                key={index} 
                className="bg-neutral-1 rounded-lg p-4 flex flex-col items-center justify-center text-center min-h-[120px] hover:shadow-md transition-shadow cursor-pointer"
              >
                <span className="text-3xl mb-2">{category.icon}</span>
                <span className="font-semibold">{category.name}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
} 