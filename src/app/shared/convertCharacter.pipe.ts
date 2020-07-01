import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertCharacter'
})
export class ConvertCharacterPipe implements PipeTransform {
  transform(value: string, input: string, output: string): string {
    return value.replace(input, output);
  }
}
