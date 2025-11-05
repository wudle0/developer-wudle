# DEVELOPER WUDLE Portfolio

React 기반 포트폴리오 웹사이트

## 기술 스택

- **React 18** - UI 라이브러리
- **Vite** - 빌드 도구
- **SCSS** - 스타일링

## 프로젝트 구조

```
portfolio/
├── src/                    # React 소스 코드
│   ├── main.jsx           # 앱 진입점
│   ├── App.jsx            # 루트 컴포넌트
│   ├── pages/             # 페이지 컴포넌트
│   │   └── IntroPage.jsx
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   └── MenuList.jsx
│   └── scss/             # SCSS 스타일 (공통 사용)
│       ├── abstracts/   # 변수, 믹스인 등
│       ├── base/        # 베이스 스타일
│       └── components/  # 컴포넌트 스타일
├── public/               # 정적 리소스 (빌드 시 복사됨)
│   ├── images/          # 이미지 파일
│   └── fonts/           # 폰트 파일
├── index.html            # HTML 템플릿
├── vite.config.js        # Vite 설정
└── package.json          # 의존성 관리

```

## 개발 시작하기

### 패키지 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## 주요 특징

- ✅ **SCSS 구조 유지** - 기존 `scss` 구조 그대로 사용 가능 (abstracts, base, components)
- ✅ **경로 alias 설정** - `@scss` 등 편리한 경로 사용
- ✅ **React 컴포넌트 구조** - 페이지와 컴포넌트로 분리된 구조
- ✅ **Vite 빌드** - 빠른 HMR과 최적화된 빌드
- ✅ **공통 스타일** - src/scss 폴더에 프로젝트 전반에서 사용하는 공통 스타일 관리

## SCSS 사용 방법

```scss
// 컴포넌트에서 SCSS 파일 import
import './styles.scss';

// SCSS 파일 내에서 abstracts 자동 import됨
// vite.config.js에서 설정됨
.my-component {
  // abstracts의 변수와 믹스인 사용 가능
}
```
