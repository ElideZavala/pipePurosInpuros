import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numElem',
})
export class NumElemPipe implements PipeTransform {

  transform(cadena: any[]) : number {
    return cadena.length;
  }

}
