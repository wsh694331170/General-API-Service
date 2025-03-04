import { Module } from '@nestjs/common';
import { GeneralApiModule } from './general-api';
import { BioImpedanceModule } from './bio-impedance';

@Module({
  imports: [GeneralApiModule, BioImpedanceModule],
})
export class AppModule {}
