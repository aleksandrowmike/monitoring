import { Direction } from "./direction";

export interface Plan {
  id: number;
  job: boolean;
  army: boolean;
  business: boolean;
  decree: boolean;
  education: boolean;
  other: string;
  level: string;
  university: string;
}
export interface Employment {
  id: number;
  company: string;
  city: string;
  position: string;
  speciality: boolean;
}
export interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  specialty_activity: boolean;
  year_graduate: string;
  agreement: boolean;
  direction_id: number;
  category_id: number;
  plans: Plan;
  employment: Employment;
  direction: Direction;
  category: {
    id: number;
    title: string;
  };
}
