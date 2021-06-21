import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";


export class CalcImovelValidationClassPipe implements PipeTransform {

  transform(body: any, metaData: ArgumentMetadata): number {

    let qtde_metros = body.qtde_metros;
    if (qtde_metros < 10 || qtde_metros > 10000) throw new BadRequestException(`A quantidade de metros de estar entre 10 e 10.000`);
    return body;

  }

}