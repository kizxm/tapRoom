import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "priceFilter",
  pure: false
})

export class PricePipe implements PipeTransform {
  transform(input: Keg[], priceLimit: number) {
    var output: Keg[] = [];
    if(priceLimit > 0) {
    input.forEach(item => {
      if(item.price <= priceLimit) {
        output.push(item);
      }
    });
    return output;
  } else {
    return input;
  }
}
}
