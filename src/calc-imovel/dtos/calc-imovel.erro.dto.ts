import { ApiProperty } from '@nestjs/swagger';

export class CalculoImovelErrorValidacaoDTO {

  @ApiProperty({ description: 'Status code do erro de vallidacao.' })
  statusCode: number;
  @ApiProperty({ description: 'Mensagem do erro de validacao.' })
  message: string;
  @ApiProperty({ description: 'Tipo de erro HTTP.' })
  error: string;

}
