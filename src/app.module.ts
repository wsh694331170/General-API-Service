import { Module } from '@nestjs/common';
import { GeneralApiModule } from './general-api';

@Module({
  imports: [GeneralApiModule],
})
export class AppModule {}
