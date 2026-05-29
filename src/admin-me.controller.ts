import { Controller, Get } from '@nestjs/common';

type AdminMeResponse = {
  authenticated: boolean;
  authMode: 'mock' | 'oidc';
  user: null | {
    id: string;
    email: string;
    roles: string[];
  };
};

@Controller('api')
export class AdminMeController {
  @Get('me')
  getMe(): AdminMeResponse {
    return {
      authenticated: false,
      authMode: 'mock',
      user: null,
    };
  }
}