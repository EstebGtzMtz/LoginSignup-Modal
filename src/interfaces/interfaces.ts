export interface ILoginSignupProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface IForm{
  email: string,
  password: string
}

export interface IShowModalProps{
  show: boolean,
  setShow: any
}