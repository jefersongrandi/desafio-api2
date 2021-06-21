import { BadGatewayException, BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CalculoImovelDTO } from './dtos/calc-imovel.dto';
import axios from 'axios';

@Injectable()
export class CalcImovelService {

  async calcularValorImovel(calculoImovelDTO: CalculoImovelDTO): Promise <any> {
    
    const qtMts = calculoImovelDTO.qtde_metros;

    let result = {};
    let valorMetroQuadrado: number = 0;
    
    try {
      let data = await axios.get('https://viacep.com.br/ws/87308192/json/')
      result = data.data;
      valorMetroQuadrado = 500.00;

    } catch (error) {
      throw new BadGatewayException('Erro ao busca preço do metro quadrado');       
    }

    let calculado = (valorMetroQuadrado * qtMts).toFixed(2);    

    return { valor_calculado: calculado, cep: result};
  }

}
