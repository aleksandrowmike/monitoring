import { User } from "../../../models/user";

export interface SignUpForm {
  email: string;
  password: string;
  password_confirmation: string;
}

export interface AuthResponse {
  user: User;
}
