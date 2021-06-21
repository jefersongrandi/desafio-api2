import { Body, Controller, Get, Options, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiHideProperty, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CalcImovelService } from './calc-imovel.service';
import { CalculoImovelDTO } from './dtos/calc-imovel.dto';
import { CalculoImovelErrorValidacaoDTO } from './dtos/calc-imovel.erro.dto';
import { CalculoImovelRetornoDTO } from './dtos/calc-imovel.retorno.dto';
import { CalcImovelValidationClassPipe } from './pipes/calc-imovel.validation.pipe';

@ApiTags('Calculo de valor do imóvel')
@Controller('api/calc-imovel')
export class CalcImovelController {

  constructor(private calcImovelService: CalcImovelService){};

  @ApiOperation({ summary: 'Retorna Calculo Total do Imóvel.' })
  @ApiResponse({ status: 200, description: 'Sucesso no cálculo', type: CalculoImovelRetornoDTO })
  @ApiResponse({ status: 400, description: 'Erro validação no cálculo', type: [CalculoImovelErrorValidacaoDTO] })
  @ApiBody({required: true, type: CalculoImovelDTO})
  @UsePipes(ValidationPipe, CalcImovelValidationClassPipe)
  @Post()
  async calcularValorImovel(@Body() calculoImovelDTO: CalculoImovelDTO) {
    return this.calcImovelService.calcularValorImovel(calculoImovelDTO);
  }

}
