import { Test, TestingModule } from '@nestjs/testing';
import { CalcImovelService } from './calc-imovel.service';
import axios, { AxiosResponse }  from 'axios';
import { CalculoImovelDTO } from './dtos/calc-imovel.dto';
import { CalculoImovelResponseDTO } from './dtos/calc-imovel.response.dto';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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

  it('call getPrecoPorMetroQuadrado()', async () => {

    //mock de resposta da response
    const axiosResponse: AxiosResponse = {
      data: { 
        id: 1, 
        preco: 500.00,
      },
      status: 200,
      statusText: "OK",
      config: {},
      headers: {}
    };

    //resultado esperado
    const preco: CalculoImovelResponseDTO = {valorCalculado: 50000, valorMetro: 500};

    //mock axios com response esperado
    await mockedAxios.get.mockResolvedValue(axiosResponse);

    const result = await service.calcularValorImovel({qtdeMetros: 100});

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result).toMatchObject(preco);

  }) 

});
