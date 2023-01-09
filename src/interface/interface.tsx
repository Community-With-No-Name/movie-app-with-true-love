export interface UserFormState {
  username: string;
  email: string;
  password: string;
}

export interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  handleChange: any;
}
