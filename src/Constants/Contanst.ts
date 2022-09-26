import { IForm } from "../interfaces/interfaces";

export const defaultFormValues: IForm = {
  email:{
    text: '',
    errors: false,
    errorMessagge: ''
  },
  password:{
    text: '',
    errors: false,
    errorMessagge: ''
  }
}


export const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
export const PASSWORD_REGEX= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,}$/
