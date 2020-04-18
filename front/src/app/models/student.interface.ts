import { IDirections } from "./directions.interface";
import { IFaculties } from "./faculties.interface";

export interface IStudentInfo {
  id: number;
  name: string;
  email: string;
  phone: string;
  category: string;
  year_graduate: number;
  agreement: number;
  activity: number;
}
export interface IStudentPlans {
  education: number;
  job: number;
  decree: number;
  army: number;
  business: number;
  other: string;
}
export interface ICompany {
  name: string;
  city: string;
}
export interface IStudentJob {
  employment: number;
  position: string;
  specialty: string;
  company: ICompany;
}
export interface IContinuingEducation {
  university: string;
  level: string;
}
export interface IStudentDirection {
  id: number;
  name: string;
  level: string;
  code: string;
}
export interface IStudent {
  student: IStudentInfo;
  plans: IStudentPlans;
  job: IStudentJob;
  continuing_education: IContinuingEducation;
  direction: IStudentDirection;
  faculty: IFaculties;
}
