# blue.admin_bff

관리자 Frontend를 위한 Backend For Frontend 저장소입니다.


## 역할

- Admin Frontend 전용 API 제공
- OAuth2/OIDC confidential client 역할
- 사용자 세션 소유
- Authorization Server가 발급한 token 보관
- Frontend에 HttpOnly session cookie 발급
- downstream으로 access token 전달
- frontend 요구에 맞춘 응답 조합


## 책임 경계

- OAuth2/OIDC token은 발급하지 않습니다.
- JWT signing key를 관리하지 않습니다.
- service-specific permission을 최종 판단하지 않습니다.
- business authorization을 소유하지 않습니다.


## 기술

- NestJS
- TypeScript
- Node.js


## API

- `GET /health`
- `GET /api/me`

현재 인증은 mock 상태입니다.


## 로컬 실행

```bash
npm install
npm run start:dev