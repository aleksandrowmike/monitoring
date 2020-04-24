import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "replaceValueWithText"
})
export class ReplaceValueWithTextPipe implements PipeTransform {

  transform(value: string | number): string | number {
    switch (value) {
      case 1 : {
        return "Да";
      }
      case 0 : {
        return "Нет";
      }
      case "" : {
        return "Не указал";
      }
      case null : {
        return "Не указал";
      }
      default: {
        return value;
      }
    }
  }

}
