'use client';

import Link from 'next/link';

export default function Services() {
  const serviceCards = [
    {
      title: '정보 제공 서비스',
      heading: '한국 생활 필수 정보',
      description: '주거, 교통, 일상생활, 언어, 행정, 의료, 문화, 취업, 긴급상황, 교육까지 10개 카테고리의 정보를 제공합니다.',
      icon: 'info',
      link: '/info'
    },
    {
      title: '맞춤형 지원 서비스',
      heading: '개인화된 생활 지원',
      description: '통역/번역 서비스, 행정 지원 서비스, 정착 컨설팅, 문화 체험 가이드 등의 맞춤형 서비스를 제공합니다.',
      icon: 'support',
      link: '/custom-support'
    },
    {
      title: '커뮤니티 플랫폼',
      heading: '외국인 커뮤니티 형성',
      description: '주제별 커뮤니티, 중고거래 마켓플레이스, 이벤트 및 모임, Q&A 포럼 등으로 연결과 정보 공유를 지원합니다.',
      icon: 'community',
      link: '/community'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="section-title">핵심 서비스</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {serviceCards.map((service, index) => (
            <div key={index} className="card hover:translate-y-[-8px] transition-transform">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-3">
                  {service.icon === 'info' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    </svg>
                  )}
                  {service.icon === 'support' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                    </svg>
                  )}
                  {service.icon === 'community' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                      <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                      <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-semibold text-primary">{service.title}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.heading}</h3>
              <p className="text-neutral-3 mb-6">{service.description}</p>
              
              <Link href={service.link} className="inline-block btn-outline">
                더 알아보기
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 