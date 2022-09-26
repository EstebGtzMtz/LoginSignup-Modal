import { IForm, ILoginSignupProviderProps } from "../interfaces/interfaces"
import { LoginSignupContext } from "./LoginSignupContext"
import { useState } from 'react';
import { defaultFormValues } from "../Constants/Contanst";

const LoginSignupProvider = ({children}:ILoginSignupProviderProps) => {

  const [show, setShow] = useState(false);
  const [formInputsHandle, setformInputsHandle] = useState<IForm>(defaultFormValues)
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true)

  const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => setformInputsHandle({...formInputsHandle, email: {text: e.target.value}});
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setformInputsHandle({...formInputsHandle, password: {text: e.target.value}});

  const handleSumbit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formInputsHandle)
  }

  const changeFormAction = () => setIsLogin(!isLogin)

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
      handleSumbit,
      isLogin,
      changeFormAction
    }}
    >
      {children}
    </LoginSignupContext.Provider>
  )
}

export default LoginSignupProvider