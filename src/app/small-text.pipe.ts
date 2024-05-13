import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smallText',
  // standalone: true
})
export class SmallTextPipe implements PipeTransform {

  transform(text: string): string {
    text.fontcolor('gray');
    text.fontsize(35);
    text.bold();
    return text;
  }

}
