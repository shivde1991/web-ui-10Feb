import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(items: any[],  value: string): any[] {
    
    if(!items) return [];
    if(!value) return items;

        var res= items.filter(
          item => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1)
          return res;
        }

}
