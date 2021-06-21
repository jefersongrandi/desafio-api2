import { Module } from '@nestjs/common';
import { CalcImovelModule } from './calc-imovel/calc-imovel.module';

@Module({
  imports: [CalcImovelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
