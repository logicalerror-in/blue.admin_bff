import { Module } from '@nestjs/common';

import { AdminMeController } from './admin-me.controller';
import { HealthController } from './health.controller';

@Module({
  imports: [],
  controllers: [HealthController, AdminMeController],
  providers: [],
})
export class AppModule {}
