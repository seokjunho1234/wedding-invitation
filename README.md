# wedding-invitation

다국어 모바일 청첩장 프로젝트입니다. GitHub Pages에서 각 폴더의 `index.html`을 바로 열 수 있습니다.

## 페이지 구성

```text
/
├── attending/
│   ├── index.html                         # 한국어 참석자용
│   └── guests/
│       └── seong-sujin.html               # 성수진 님 개인 초대장
├── not-attending/
│   └── index.html                         # 한국어 불참자용·메시지 작성
├── taiwan/
│   ├── index.html                         # 중국어 번체 참석자용
│   └── guests/                            # 대만 하객 개인별 초대장
├── japan/
│   ├── index.html                         # 일본어 참석자용
│   ├── guests/
│   │   └── yamaguchi-chiharu.html         # 山口ちはる様 개인 초대장
│   └── not-attending/
│       └── index.html                     # 일본어 불참자용·메시지 작성
└── attending/assets/thumbnail.jpg         # 링크 미리보기용 썸네일
```

## GitHub Pages 주소

- 한국어 참석: <https://seokjunho1234.github.io/wedding-invitation/attending/>
- 한국어 불참·메시지: <https://seokjunho1234.github.io/wedding-invitation/not-attending/>
- 중국어 번체: <https://seokjunho1234.github.io/wedding-invitation/taiwan/>
- 일본어 참석: <https://seokjunho1234.github.io/wedding-invitation/japan/>
- 일본어 불참·메시지: <https://seokjunho1234.github.io/wedding-invitation/japan/not-attending/>

개인별 초대장은 각 언어 폴더의 `guests/` 아래 파일을 사용합니다. 모든 페이지에는 카카오톡·LINE 등 공유 서비스용 OG 태그가 설정되어 있습니다.

## 방명록

한국어·일본어 불참자용 페이지의 메시지는 Supabase에 저장됩니다. 운영 시 Supabase의 RLS 정책과 공개용 publishable key 설정을 확인하세요. secret key는 HTML이나 저장소에 넣지 않습니다.
