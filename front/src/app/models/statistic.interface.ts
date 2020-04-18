import { IDirections } from "./directions.interface";
import { IFaculties } from "./faculties.interface";

export interface IStatisticNumAndPercent {
  num: number;
  percent?: number;
}

export interface IStatisticCount {
  count: number;
  training: string;
  employed: IStatisticNumAndPercent;
  employed_activity: IStatisticNumAndPercent;
  employed_no_activity: IStatisticNumAndPercent;
  counting_education: IStatisticNumAndPercent;
  job: IStatisticNumAndPercent;
  decree: IStatisticNumAndPercent;
  army: IStatisticNumAndPercent;
  business: IStatisticNumAndPercent;
  message?: string;
}

export interface IStatisticDirections {
  direction: IDirections;
  all: IStatisticCount;
  bachelor: IStatisticCount;
  mag: IStatisticCount;
  spec: IStatisticCount;
}

export interface IStatistic {
  faculty: IFaculties;
  directions: IStatisticDirections[];
}
