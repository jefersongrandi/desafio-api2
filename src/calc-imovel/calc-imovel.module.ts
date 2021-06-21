import { Module } from '@nestjs/common';
import { CalcImovelController } from './calc-imovel.controller';
import { CalcImovelService } from './calc-imovel.service';

@Module({
  controllers: [CalcImovelController],
  providers: [CalcImovelService]
})
export class CalcImovelModule {}
