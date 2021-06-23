import { Test, TestingModule } from '@nestjs/testing';
import { CalcImovelController } from './calc-imovel.controller';
import { CalcImovelService } from './calc-imovel.service';
import { CalculoImovelDTO } from './dtos/calc-imovel.dto'
import { CalculoImovelResponseDTO } from './dtos/calc-imovel.response.dto'

describe('CalcImovelController', () => {
  let controller: CalcImovelController;
  let service: CalcImovelService;

  const preco: CalculoImovelDTO = { qtdeMetros: 100 };
  const response: CalculoImovelResponseDTO = { valorCalculado: 50000, valorMetro: 500 } 

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalcImovelController],
      providers: [CalcImovelService]
    }).compile();

    controller = module.get<CalcImovelController>(CalcImovelController);
    service = module.get<CalcImovelService>(CalcImovelService);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  it('Ter invocado service', async () => {
    jest.spyOn(service, 'calcularValorImovel').mockImplementation(async() => response);
    await controller.calcularValorImovel(preco)
    expect(service.calcularValorImovel).toHaveBeenCalledTimes(1);
  })

});

