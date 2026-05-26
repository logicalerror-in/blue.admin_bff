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

## 기술 후보

- Node.js
- TypeScript
- NestJS 우선 후보

## 책임 경계

- OAuth2/OIDC token은 발급하지 않습니다.
- JWT signing key를 관리하지 않습니다.
- service-specific permission을 최종 판단하지 않습니다.
- business authorization을 소유하지 않습니다.

## 관련 저장소

- `blue.admin_front`
- `blue.admin_auth`
- `blue.admin_gateway`
- `blue.iac_etf`
