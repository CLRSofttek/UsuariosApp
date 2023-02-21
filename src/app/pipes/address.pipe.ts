import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../users/model/user.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: Address | undefined): string {
    return value?`${value.street} ${value.suite}, ${value.city}`:'';
  }

}
