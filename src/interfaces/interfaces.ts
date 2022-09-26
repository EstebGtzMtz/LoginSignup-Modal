export interface ILoginSignupProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface IForm{
  email: {
    text: string,
    errors: boolean,
    errorMessagge: string
  },
  password: {
    text: string,
    errors?: boolean,
    errorMessagge?: string
  },
  passwordConfirm?:{
    text: string | undefined
    errors: boolean,
    errorMessagge: string
  }
}

export interface IShowModalProps{
  show: boolean,
  setShow: any
}