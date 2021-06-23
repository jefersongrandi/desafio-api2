import { Body, Controller, Get, HttpCode, Options, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CalcImovelService } from './calc-imovel.service';
import { CalculoImovelDTO } from './dtos/calc-imovel.dto';
import { CalculoImovelErrorValidacaoDTO } from './dtos/calc-imovel.erro.dto';
import { CalculoImovelResponseDTO } from './dtos/calc-imovel.response.dto';
import { CalcImovelValidationClassPipe } from './pipes/calc-imovel.validation.pipe';

@ApiTags('Calculo de valor do imóvel')
@Controller('api/calc-imovel')
export class CalcImovelController {

  constructor(private calcImovelService: CalcImovelService){};

  @ApiOperation({ summary: 'Retorna Calculo Total do Imóvel.' })
  @ApiResponse({ status: 200, description: 'Sucesso no cálculo', type: CalculoImovelResponseDTO })
  @ApiResponse({ status: 400, description: 'Erro validação no cálculo', type: [CalculoImovelErrorValidacaoDTO] })
  @ApiBody({required: true, type: CalculoImovelDTO})
  @UsePipes(ValidationPipe, CalcImovelValidationClassPipe)
  @HttpCode(200)
  @Post()
  async calcularValorImovel(@Body() calculoImovelDTO: CalculoImovelDTO) {
    return this.calcImovelService.calcularValorImovel(calculoImovelDTO);
  }

}
