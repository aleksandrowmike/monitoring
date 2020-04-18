import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "deletePrefix"
})
export class DeletePrefixPipe implements PipeTransform {
  transform(value: string): string {
    if (value.includes("АФ")) {
      return value.slice(3);
    }
  }

}
