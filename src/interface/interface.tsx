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

export interface SliderProps {
  name: string;
  id: number;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  release_date: string;
  original_title: string;
  vote_average: number;
}

export interface ScrollingProps {
  children: any;
  title: string;
  url: string;
  speed: number;
}

export interface CardProps {
  data: SliderProps;
  type: string;
}
