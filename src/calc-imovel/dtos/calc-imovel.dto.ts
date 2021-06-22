import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CalculoImovelDTO {

  @IsNotEmpty({message: "qtde_metros não pode ser nulo."})
  @IsInt({message: "qtde_metros deve ser um número"})
  @ApiProperty({ minimum: 10, maximum: 10000, example: 10, description: 'Quantidade de metros quadrados' })
  qtdeMetros: number;

}