import { IForm, ILoginSignupProviderProps } from "../interfaces/interfaces"
import { LoginSignupContext } from "./LoginSignupContext"
import { useState } from 'react';

const LoginSignupProvider = ({children}:ILoginSignupProviderProps) => {

  const [show, setShow] = useState(false);
  const [formInputsHandle, setformInputsHandle] = useState<IForm>({email: '', password:''})
  const [showPassword, setShowPassword] = useState(false)

  const handleEmail = (e:any) => setformInputsHandle({...formInputsHandle, email: e.target.value});

  const handlePassword = (e: any) => setformInputsHandle({...formInputsHandle, password: e.target.value})

  const handleSumbit = (e:any) => {
    e.preventDefault()
    console.log(formInputsHandle)
  }

  return (
    <LoginSignupContext.Provider
    value={{
      show,
      setShow,
      formInputsHandle,
      setformInputsHandle,
      handleEmail,
      handlePassword,
      showPassword,
      setShowPassword,
      handleSumbit
    }}
    >
      {children}
    </LoginSignupContext.Provider>
  )
}

export default LoginSignupProvider