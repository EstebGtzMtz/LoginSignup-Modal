import { IForm, ILoginSignupProviderProps } from "../interfaces/interfaces"
import { LoginSignupContext } from "./LoginSignupContext"
import { useState } from 'react';

const LoginSignupProvider = ({children}:ILoginSignupProviderProps) => {

  const [show, setShow] = useState(false);
  const [formInputsHandle, setformInputsHandle] = useState<IForm>({email: '', password:''})
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true)

  const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => setformInputsHandle({...formInputsHandle, email: e.target.value});
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setformInputsHandle({...formInputsHandle, password: e.target.value})

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