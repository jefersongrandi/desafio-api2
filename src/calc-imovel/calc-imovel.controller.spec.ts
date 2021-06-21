import { Test, TestingModule } from '@nestjs/testing';
import { CalcImovelController } from './calc-imovel.controller';

describe('CalcImovelController', () => {
  let controller: CalcImovelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalcImovelController],
    }).compile();

    controller = module.get<CalcImovelController>(CalcImovelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
