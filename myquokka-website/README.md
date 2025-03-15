# MyQuokka 웹사이트

MyQuokka는 한국에 거주하거나 방문하는 외국인들을 위한 종합 생활 지원 서비스 플랫폼입니다. 이 프로젝트는 MyQuokka 서비스를 위한 반응형 웹사이트입니다.

## 주요 기능

- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 정보 제공 서비스
- 맞춤형 지원 서비스
- 커뮤니티 플랫폼
- 멤버십 시스템

## 기술 스택

- Next.js
- TypeScript
- Tailwind CSS
- React Icons

## 설치 방법

1. 저장소 클론:
   ```bash
   git clone https://github.com/yourusername/myquokka-website.git
   ```

2. 의존성 설치:
   ```bash
   cd myquokka-website
   npm install
   ```

3. 개발 서버 실행:
   ```bash
   npm run dev
   ```

4. 브라우저에서 `http://localhost:3000` 접속

## 빌드 방법

프로덕션 빌드 생성:

```bash
npm run build
```

빌드된 앱 실행:

```bash
npm run start
```

## 프로젝트 구조

```
myquokka-website/
├── public/            # 정적 파일 (이미지, 폰트 등)
├── src/
│   ├── app/           # Next.js 13 App Router
│   │   ├── components/  # 재사용 가능한 컴포넌트
│   │   ├── globals.css  # 전역 스타일
│   │   ├── layout.tsx   # 루트 레이아웃
│   │   └── page.tsx     # 홈페이지
│   └── ...
├── package.json
├── tailwind.config.js
└── ...
```

## 컨트리뷰션

프로젝트에 기여하고 싶으시다면 이슈를 생성하거나 풀 리퀘스트를 제출해주세요.

## 라이센스

이 프로젝트는 [MIT 라이센스](LICENSE) 하에 있습니다. 