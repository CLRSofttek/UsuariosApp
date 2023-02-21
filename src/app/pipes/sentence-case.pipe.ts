import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase'
})
export class SentenceCasePipe implements PipeTransform {

  transform(value: string | null): string | null{
    return value?value.substring(0,1).toUpperCase() + value?.substring(1):null;
  }

}
