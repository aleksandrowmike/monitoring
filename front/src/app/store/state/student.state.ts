import { StudentsResponse } from "../../interfaces/students-response";
import { IStudent } from "../../models/student.interface";

export interface IStudentState {
  response: StudentsResponse;
  selectedStudent: IStudent;
  count: number;
  createId?: number;
}
export const initialStudentState: IStudentState = {
  response: null,
  selectedStudent: null,
  count: null
};
