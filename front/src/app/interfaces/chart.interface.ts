export interface IChart {
  chartType: string;
  // tslint:disable-next-line:no-any
  dataTable: any;
  options: object;
  containerId?: string;
}
