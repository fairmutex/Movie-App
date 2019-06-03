import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'keysFilter'
})
export class KeysFilterPipe implements PipeTransform {

  transform(value, args: string[]): any {
    return this.convert(value);
  }

  public convert(value) {
    const keys = [];
    for (const key in value) {
      if (value[key] instanceof Array && value[key].length > 0 && this.isAnObject(value[key][0])) {
        value[key].forEach(e => {
          const tempKeys = this.convert(e);
          let i = 0;
          tempKeys.forEach(f => {
            keys.push({ key: key + '[' + i + '].' + f.key, value: f.value });
            i++;
          });
        });

      } else if (this.isAnObject(value[key])) {
        const tempKeys = this.convert(value[key]);
        tempKeys.forEach(element => {
          keys.push({ key: key + '.' + element.key, value: element.value });
        });
      } else {
        keys.push({ key, value: value[key] });
      }
    }
    return keys;
  }

  public isAnObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }

}

// export class KeysPipe implements PipeTransform {
//   transform(value, args: string[]): any {


//     let keys = [];
//     for (let key in value) {
//       console.log(key + '->' + value);
//       keys.push({key: key, value: value[key]});
//     }
//     return keys;
//   }

// }
