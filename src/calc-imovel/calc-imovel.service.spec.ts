import { Test, TestingModule } from '@nestjs/testing';
import { CalcImovelService } from './calc-imovel.service';

describe('CalcImovelService', () => {
  let service: CalcImovelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalcImovelService],
    }).compile();

    service = module.get<CalcImovelService>(CalcImovelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
