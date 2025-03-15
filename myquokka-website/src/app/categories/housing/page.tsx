import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function HousingPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-8 px-4 max-w-7xl" style={{
        backgroundColor: '#F5F5F7',
        color: '#1A1A1A',
      }}>
        <h1 className="text-3xl font-bold mb-6 text-center">주거 및 공과금 관리</h1>
        
        <div className="mb-10">
          <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
            ← 홈으로 돌아가기
          </Link>
        </div>

        {/* 주택 유형 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">1. 주택 유형 안내</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">아파트 (Apartment)</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>특징: 대규모 주거 단지, 보안 시설, 관리실, 엘리베이터</li>
                <li>장점: 보안성, 편의시설, 관리 서비스</li>
                <li>단점: 상대적으로 높은 임대료, 관리비 별도</li>
                <li>적합한 대상: 가족, 장기 거주자, 안전 중시형</li>
                <li>평균 임대료: 서울 기준 보증금 1억-3억원, 월세 80만원-200만원</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">오피스텔 (Officetel)</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>특징: 주거와 업무 기능 결합, 소형 위주</li>
                <li>장점: 편리한 위치, 독립적 생활, 시설 편의성</li>
                <li>단점: 공간 협소, 소음 문제 가능성</li>
                <li>적합한 대상: 1인 가구, 직장인, 단기 체류자</li>
                <li>평균 임대료: 보증금 1,000만원-5,000만원, 월세 50만원-100만원</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">빌라/다세대 (Villa/Multi-family Housing)</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>특징: 5층 이하 소규모 건물, 아파트보다 저렴</li>
                <li>장점: 경제적, 주택 느낌, 주변 생활 편의성</li>
                <li>단점: 시설 노후 가능성, 보안 취약</li>
                <li>적합한 대상: 예산 제한적 거주자, 현지 경험 선호자</li>
                <li>평균 임대료: 보증금 5,000만원-1억원, 월세 40만원-80만원</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">단독주택 (Single House)</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>특징: 독립적 공간, 개인 마당 가능</li>
                <li>장점: 프라이버시, 자유로운 생활, 공간 넓음</li>
                <li>단점: 관리 부담, 위치에 따라 교통 불편</li>
                <li>적합한 대상: 가족, 장기 거주자, 자유로운 생활 선호자</li>
                <li>평균 임대료: 지역에 따라 큰 편차 (월세 50만원~300만원+)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 주택 계약 시스템 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">2. 주택 계약 시스템</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">임대 방식 비교</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-medium mb-2">전세 (Jeonse)</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>정의: 큰 보증금 예치 후 월세 없이 거주</li>
                  <li>보증금 범위: 주택 가격의 50-80%</li>
                  <li>장점: 월세 부담 없음, 낮은 생활비</li>
                  <li>단점: 큰 초기 자금 필요, 보증금 회수 리스크</li>
                  <li>계약 기간: 보통 2년 (갱신 가능)</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-medium mb-2">월세 (Wolse)</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>정의: 소액 보증금 + 매월 임대료 지불</li>
                  <li>보증금 범위: 주택 가격의 10-20%</li>
                  <li>장점: 적은 초기 자금, 유연한 계약</li>
                  <li>단점: 월 고정 지출 발생</li>
                  <li>계약 기간: 보통 1-2년 (갱신 가능)</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-medium mb-2">반전세</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>정의: 중간 규모 보증금 + 소액 월세</li>
                  <li>보증금 범위: 주택 가격의 30-50%</li>
                  <li>장점: 전세와 월세의 중간형태, 융통성</li>
                  <li>단점: 임대료 인상 가능성</li>
                  <li>계약 기간: 보통 2년 (갱신 가능)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">계약 절차 가이드</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ol className="list-decimal ml-5 space-y-3">
                <li>
                  <strong>매물 탐색</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>부동산 앱 활용법: 직방, 다방, 네이버 부동산</li>
                    <li>부동산 중개소 방문 시 영어 문구: "영어 가능한 중개사 있나요?"</li>
                    <li>직접 방문 시 체크리스트: 소음, 누수, 난방 상태, 인터넷</li>
                  </ul>
                </li>
                <li>
                  <strong>계약 협상</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>보증금/월세 협상 방법</li>
                    <li>계약 조건 확인 사항: 계약 기간, 수리 책임, 보증금 반환 조건</li>
                    <li>외국인 필수 협상 포인트: 영문 계약서, 통역 동반</li>
                  </ul>
                </li>
                <li>
                  <strong>계약 체결</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>필요 서류: 외국인등록증, 여권, 은행 잔고증명서</li>
                    <li>계약금 지불 방법: 보통 보증금의 10%</li>
                    <li>계약서 보관 및 등록: 임대차계약 확정일자 받기</li>
                  </ul>
                </li>
                <li>
                  <strong>입주 준비</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>입주 전 점검 사항: 시설 작동 확인, 하자 체크</li>
                    <li>이사 일정 조율: 관리사무소 예약</li>
                    <li>인테리어 변경 가능 범위</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* 공과금 관리 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">3. 공과금 관리</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">전기 (Electricity)</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>공급 기관: 한국전력공사(KEPCO)</li>
                <li>요금 체계: 누진세 구조, 계절별 차등</li>
                <li>평균 비용: 1-2인 가구 월 3-5만원, 가족 5-10만원</li>
                <li>납부 방법: 자동이체, 앱 결제, 편의점 결제</li>
                <li>절약 팁: 대기전력 차단, 냉장고 온도 조절</li>
                <li>영어 서비스: KEPCO 영어 고객센터 (☎ 123)</li>
                <li>정전 시 대처법: 한전 정전신고 (☎ 123)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">수도 (Water)</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>공급 기관: 지역 수도사업본부</li>
                <li>요금 체계: 사용량 기준 구간별 요금</li>
                <li>평균 비용: 1-2인 가구 월 1-3만원</li>
                <li>납부 방법: 자동이체, 온라인 납부, 편의점 납부</li>
                <li>누수 확인법: 수도계량기 확인 방법</li>
                <li>동파 예방법: 겨울철 수도관 관리</li>
                <li>영어 서비스: 서울글로벌센터 통한 영어 상담</li>
                <li>민원 접수: 각 지역 수도사업본부 연락처</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">가스 (Gas)</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>공급 종류: 도시가스(배관), LPG(용기)</li>
                <li>요금 체계: 계절별 차등, 기본요금+사용량</li>
                <li>평균 비용: 월 1-5만원 (난방 시 증가)</li>
                <li>납부 방법: 자동이체, 앱 결제, 은행/편의점 납부</li>
                <li>안전 점검: 가스 누출 확인법, 환기 중요성</li>
                <li>비상 연락처: 가스 긴급 신고 (☎ 1544-4500)</li>
                <li>사용 개시/중단: 이사 시 절차</li>
                <li>가스레인지 사용법: 한국식 가스레인지 특징</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">인터넷/통신 (Internet/Communication)</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>주요 통신사: KT, SKT, LG U+</li>
                <li>외국인 전용 상품: 요금제 정보 (월 3-8만원)</li>
                <li>계약 필요 서류: 외국인등록증, 여권, 체류지 증명</li>
                <li>설치 신청 방법: 영어 고객센터, 온라인 신청, 대리점 방문</li>
                <li>와이파이 설정법: 공유기 초기 설정</li>
                <li>해지 절차: 위약금 확인, 필요 서류</li>
                <li>무료 와이파이 존: 공공장소, 카페 등 정보</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 주거 관리 팁 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">4. 주거 관리 팁</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">집주인과의 소통</h3>
              <h4 className="text-lg font-medium mb-2">필수 한국어 표현</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>"수리가 필요해요" (Repairs needed)</li>
                <li>"물이 새요" (Water leak)</li>
                <li>"난방이 안 돼요" (Heating not working)</li>
                <li>"전기가 나갔어요" (Power outage)</li>
                <li>"소음이 심해요" (Noise complaint)</li>
              </ul>
              <h4 className="text-lg font-medium mt-4 mb-2">소통 채널 관리</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>카카오톡 활용법: 번역 기능, 이미지 전송</li>
                <li>관리사무소 역할: 중재자 활용법</li>
                <li>번역 앱 추천: 파파고, 구글 번역</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">시설 관리 및 수리</h3>
              <h4 className="text-lg font-medium mb-2">기본 수리 지식</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>전구 교체: 한국 규격 안내</li>
                <li>배수구 청소: 방법 및 도구</li>
                <li>벽걸이 설치: 콘크리트 벽 특성</li>
              </ul>
              <h4 className="text-lg font-medium mt-4 mb-2">한국 가전 사용법</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>보일러 조작법: 온돌 시스템 설명</li>
                <li>에어컨 관리: 필터 청소, 리모컨 사용</li>
                <li>김치냉장고 용도: 특별 보관 기능</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 비상 상황 대처 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">5. 비상 상황 대처</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-3">주택 내 긴급 상황</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium mb-2">화재 발생</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>대피 경로 확인: 비상구, 계단 위치</li>
                  <li>소화기 사용법: 한국 표준 소화기 설명</li>
                  <li>신고 방법: 119 영어 서비스</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">수도 누수/파열</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>메인 밸브 차단 위치</li>
                  <li>긴급 연락처: 지역별 수도사업소</li>
                  <li>보험 청구 절차: 임대차 보험 확인</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">가스 누출</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>감지 방법: 가스 냄새, 누출 소리</li>
                  <li>긴급 조치: 환기, 불 사용 금지</li>
                  <li>신고 번호: 가스안전공사 (☎ 1544-4500)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">전기 사고</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>차단기 위치 및 작동법</li>
                  <li>감전 응급 처치</li>
                  <li>한전 긴급 연락처 (☎ 123)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">비상 연락망</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-red-100 rounded-lg">
                <p className="font-bold text-lg">119</p>
                <p>소방/구급</p>
              </div>
              <div className="text-center p-3 bg-blue-100 rounded-lg">
                <p className="font-bold text-lg">112</p>
                <p>경찰</p>
              </div>
              <div className="text-center p-3 bg-green-100 rounded-lg">
                <p className="font-bold text-lg">1345</p>
                <p>외국인종합안내센터</p>
              </div>
              <div className="text-center p-3 bg-yellow-100 rounded-lg">
                <p className="font-bold text-lg">1330</p>
                <p>관광안내</p>
              </div>
            </div>
          </div>
        </section>

        {/* 특수 주거 옵션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">6. 특수 주거 옵션</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">서비스드 레지던스</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>특징: 호텔식 서비스, 가구 완비, 단기 계약 가능</li>
                <li>위치: 강남, 여의도, 광화문 중심</li>
                <li>비용: 월 200-500만원 (면적, 서비스 수준에 따라)</li>
                <li>계약 조건: 최소 계약 기간, 보증금 규모</li>
                <li>추천 업체: 오크우드, 프레이저 플레이스, 코리아나</li>
                <li>적합한 대상: 주재원, 단기 체류자, 높은 예산 보유자</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">셰어하우스</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>특징: 주방, 거실 공유, 개인 침실</li>
                <li>위치: 홍대, 이태원, 신촌, 대학가 주변</li>
                <li>비용: 월 40-80만원 (위치, 시설에 따라)</li>
                <li>계약 조건: 1-6개월 계약, 소액 보증금</li>
                <li>추천 업체: 우주(Woozoo), 컴앤스테이, 네스트</li>
                <li>적합한 대상: 학생, 젊은 전문직, 네트워킹 선호자</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">기숙사/학생 주택</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>특징: 대학 운영, 식사 제공 가능, 규칙적 생활</li>
                <li>위치: 주요 대학 캠퍼스 내/인근</li>
                <li>비용: 월 30-60만원 (식사 포함 여부에 따라)</li>
                <li>신청 방법: 대학 국제처 통해 신청</li>
                <li>입사 조건: 재학생 우선, 신청 시기 중요</li>
                <li>적합한 대상: 유학생, 교환학생, 연구자</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">임시 숙소</h3>
              <h4 className="text-lg font-medium mb-2">게스트하우스</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>특징: 단기 체류, 조식 제공 가능</li>
                <li>비용: 일 3-8만원, 월 80-150만원</li>
                <li>위치: 이태원, 홍대, 강남</li>
                <li>예약 방법: 에어비앤비, 부킹닷컴</li>
              </ul>
              <h4 className="text-lg font-medium mt-3 mb-2">고시원/원룸텔</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>특징: 초소형 주거, 저렴한 비용</li>
                <li>비용: 월 30-50만원</li>
                <li>위치: 대학가, 역세권</li>
                <li>계약 조건: 유연한 기간, 소액 보증금</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">유용한 리소스</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="https://www.hikorea.go.kr/" target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
              <h3 className="font-semibold mb-2">하이코리아</h3>
              <p className="text-sm text-gray-600">외국인을 위한 정부 공식 정보 포털</p>
            </a>
            <a href="https://global.seoul.go.kr/" target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
              <h3 className="font-semibold mb-2">서울글로벌센터</h3>
              <p className="text-sm text-gray-600">외국인 주거 지원 및 상담 서비스</p>
            </a>
            <a href="https://www.myhome.go.kr/" target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
              <h3 className="font-semibold mb-2">마이홈포털</h3>
              <p className="text-sm text-gray-600">주택 정보 및 지원 제도 안내</p>
            </a>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
} 