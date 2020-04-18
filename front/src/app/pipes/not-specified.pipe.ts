import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "notSpecified"
})
export class NotSpecifiedPipe implements PipeTransform {
  transform(value: string): string {
    return value === "0" || value === "" ? "не указан" : value;
  }
}
