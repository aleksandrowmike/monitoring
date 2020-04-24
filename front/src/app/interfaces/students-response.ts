import { Student } from "../models/student";

export interface Link {
  first: string;
  last: string;
  prev: string;
  next: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface StudentsResponse {
  data: Student[];
  links: Link;
  meta: Meta;
}
