import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(lists: [], searchList:string): any[] {
    if(!lists) return [];
    if(!searchList) return lists;

    searchList = searchList.toLocaleLowerCase();

    return lists.filter((list: string) => {
      return list.toLocaleLowerCase().includes(searchList);
    })
  }

}
