export interface Plan {
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
  company: {title: string, city: string};
  position: string;
  speciality: boolean;
}
export interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  plans: Plan;
  employment: Employment;
  specialty_activity: boolean;
  year_graduate: string;
  agreement: boolean;
  direction_id: number;
  category_id: number;

}
