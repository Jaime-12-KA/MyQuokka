'use client';

export default function CustomServices() {
  const services = [
    {
      title: '통역/번역 서비스',
      description: '일상 대화부터 전문 문서까지 다양한 번역 지원',
      price: '시간당 50,000원'
    },
    {
      title: '행정 지원 서비스',
      description: '비자 신청, 외국인 등록, 은행 계좌 개설 등 동행 지원',
      price: '시간당 70,000원'
    },
    {
      title: '정착 컨설팅',
      description: '주거, 교육, 의료 등 종합적인 정착 계획 수립 지원',
      price: '120,000원/회'
    },
    {
      title: '문화 체험 가이드',
      description: '현지인만 아는 장소와 경험 안내',
      price: '80,000원/회'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="section-title">맞춤형 서비스</h2>
        <p className="section-subtitle">상황과 필요에 맞는 맞춤형 서비스를 이용하세요</p>
        
        <div className="space-y-4 md:space-y-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-card p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-neutral-3">{service.description}</p>
              </div>
              <button className="btn-primary self-stretch md:self-auto">
                {service.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 