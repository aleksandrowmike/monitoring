import { Student } from "../../models/student";
import { IStudent } from "../../models/student.interface";

export interface IStudentState {
  data: Student[];
  selectedStudent: IStudent;
  count: number;
  createId?: number;
}
export const initialStudentState: IStudentState = {
  data: null,
  selectedStudent: null,
  count: null
};
