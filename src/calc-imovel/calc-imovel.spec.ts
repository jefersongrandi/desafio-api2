import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { CalcImovelModule } from './calc-imovel.module';
import { CalcImovelService } from './calc-imovel.service';
import { INestApplication } from '@nestjs/common';

describe('PrecoMetro', () => {
  let service: CalcImovelService;
  let app: INestApplication;
  let mockService = { calcularValorImovel: () => {} };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [CalcImovelModule],
    })
    .overrideProvider(CalcImovelService)
    .useValue(mockService)
    .compile();

    app = moduleRef.createNestApplication();
    await app.init();

  });

  it(`/GET preco metro quadrado`, () => {

    return request(app.getHttpServer())
      .post('/api/calc-imovel')
      .set('Accept', 'application/json')
      .send({ qtdeMetros: 500})
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });

});
