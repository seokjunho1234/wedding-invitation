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
## 개인 게스트 링크

각 링크를 그대로 복사해 해당 게스트에게 보내면 됩니다. 개인 페이지에서도 이름과 메시지를 남길 수 있습니다.

### 한국어 참석자

- 성수진: <https://seokjunho1234.github.io/wedding-invitation/attending/guests/seong-sujin.html>

### 일본어 참석자

- 山口 ちはる: <https://seokjunho1234.github.io/wedding-invitation/japan/guests/yamaguchi-chiharu.html>

### 중국어 번체 참석자

- 張雅婷: <https://seokjunho1234.github.io/wedding-invitation/taiwan/guests/zhang-yating.html>
- 梁嘉文: <https://seokjunho1234.github.io/wedding-invitation/taiwan/guests/liang-jiawen.html>
- 王詩閔: <https://seokjunho1234.github.io/wedding-invitation/taiwan/guests/wang-shimin.html>
- 曾瀞儀: <https://seokjunho1234.github.io/wedding-invitation/taiwan/guests/zeng-jingyi.html>
- 林俞妏: <https://seokjunho1234.github.io/wedding-invitation/taiwan/guests/lin-yuwen.html>
- 王芷英: <https://seokjunho1234.github.io/wedding-invitation/taiwan/guests/wang-zhiying.html>
- 葉肇倫: <https://seokjunho1234.github.io/wedding-invitation/taiwan/guests/ye-zhaolun.html>
- 許雅雯: <https://seokjunho1234.github.io/wedding-invitation/taiwan/guests/xu-yawen.html>
- 梁碧宗: <https://seokjunho1234.github.io/wedding-invitation/taiwan/guests/liang-bizong.html>
- 陳淑琴: <https://seokjunho1234.github.io/wedding-invitation/taiwan/guests/chen-shuqin.html>

개인 페이지의 메시지는 기존 Supabase `messages` 테이블에 저장됩니다. 모든 개인 페이지의 메시지 목록은 같은 방명록을 공유합니다.
