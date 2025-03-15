'use client';

import Link from 'next/link';

export default function Membership() {
  const plans = [
    {
      name: '스탠다드 멤버십',
      price: '월 29,000원',
      features: [
        '기본 번역 서비스(월 2시간)',
        '행정 서비스 지원(월 2시간)',
        '문화 체험 할인(월 1회, 20% 할인)',
        '24/7 채팅 지원, 우선 응답',
        '무료 콘텐츠의 심층 버전 접근'
      ],
      highlighted: false,
      ctaText: '가입하기',
      ctaLink: '/membership/standard'
    },
    {
      name: '프리미엄 멤버십',
      price: '월 99,000원',
      features: [
        '고급 번역 서비스',
        '행정 업무 대행(월 8시간)',
        '동행 서비스(월 4시간, 장소 3곳)',
        'VIP 문화 체험, 긴급 응대',
        '전체 콘텐츠 라이브러리 접근'
      ],
      highlighted: true,
      ctaText: '가입하기',
      ctaLink: '/membership/premium'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">멤버십 플랜</h2>
        <p className="section-subtitle">더 많은 혜택을 원하신다면 멤버십에 가입하세요</p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-10">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-card p-8 shadow-md flex flex-col ${
                plan.highlighted 
                  ? 'bg-primary-light border-2 border-primary' 
                  : 'bg-white'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2 text-center">{plan.name}</h3>
              <p className="text-3xl font-bold text-primary mb-6 text-center">{plan.price}</p>
              <hr className="mb-6 border-neutral-2" />
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href={plan.ctaLink}
                className={`text-center py-3 rounded-full font-semibold ${
                  plan.highlighted 
                    ? 'btn-primary' 
                    : 'btn-outline'
                }`}
              >
                {plan.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 