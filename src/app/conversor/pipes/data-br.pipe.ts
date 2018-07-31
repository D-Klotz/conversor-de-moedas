import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(dataEnt: string): string {
    if (!dataEnt) {
      return '';
    }

    const dataArr = dataEnt.split('-');

    if (dataArr.length !== 3) {
      return dataEnt;
    }

    return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0];
  }
}
