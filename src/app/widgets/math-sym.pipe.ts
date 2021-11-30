import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathSym'
})
export class MathSymPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
