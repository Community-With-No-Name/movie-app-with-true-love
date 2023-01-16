export interface UserSignUp {
  username: string;
  email: string;
  password: string;
}
export interface UserLogin {
  email: string;
  password: string;
}

export interface ResetPassword {
  newPassword: string;
  confirmPassword: string;
}

export interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  handleChange: any;
}

export interface ModalProps {
  open: boolean;
  onClose: any;
}

export interface ChildrenParm {
  children: any;
}
export interface SideBarProps {
  to: string;
  children: any;
  Icon: any;
}
