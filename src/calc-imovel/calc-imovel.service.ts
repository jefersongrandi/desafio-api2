import { BadRequestException, Injectable } from '@nestjs/common';
import { CalculoImovelDTO } from './dtos/calc-imovel.dto';
import { CalculoImovelResponseDTO } from './dtos/calc-imovel.response.dto';
import axios from 'axios';

const url = "https://api1-preco-metro-quadrado.herokuapp.com/api/preco/metroquadradro"

@Injectable()
export class CalcImovelService {

  async calcularValorImovel(calculoImovelDTO: CalculoImovelDTO): Promise <any> {
    
    const qtMts: number = calculoImovelDTO.qtdeMetros;
    let valorMetroQuadrado: number = 0;

    try {
      let response = await axios.get(url)
      const result = response.data;
      valorMetroQuadrado = result.preco;

    } catch (error) {
      throw new BadRequestException('Não foi possível recuperar o valor do metro quadrado no service externo');       
    }

    let calculado = parseFloat((valorMetroQuadrado * qtMts).toFixed(2));
    const calculoImovelResponseDTO: CalculoImovelResponseDTO = { valorCalculado: calculado, valorMetro: valorMetroQuadrado };

    return calculoImovelResponseDTO;
  }

}
