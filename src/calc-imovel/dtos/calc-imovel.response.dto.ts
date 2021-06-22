import { ApiProperty } from '@nestjs/swagger';

export class CalculoImovelResponseDTO {

  @ApiProperty({ example: 50000.00, description: 'Valor calculado da quantidade de metros quadrados x valor do metro quadrado' })
  valorCalculado: any;
  @ApiProperty({ example: 600.00, description: 'Valor do metro quadrado' })
  valorMetro: number;

}