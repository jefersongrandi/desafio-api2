import { ApiProperty } from '@nestjs/swagger';

export class CalculoImovelRetornoDTO {

  @ApiProperty({ example: 50000.00, description: 'Valor calculado da quantidade de metros quadrados x valor do metro quadrado' })
  valor_calculado: number;

}