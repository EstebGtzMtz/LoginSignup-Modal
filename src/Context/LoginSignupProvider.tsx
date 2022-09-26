import { IForm, ILoginSignupProviderProps } from "../interfaces/interfaces"
import { LoginSignupContext } from "./LoginSignupContext"
import { useState } from 'react';
import { defaultFormValues, EMAIL_REGEX, PASSWORD_REGEX } from "../Constants/Contanst";

const LoginSignupProvider = ({children}:ILoginSignupProviderProps) => {

  const [show, setShow] = useState(false);
  const [formInputsHandle, setformInputsHandle] = useState<IForm>(defaultFormValues)
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true)

  const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => setformInputsHandle({...formInputsHandle, email: {text: e.target.value,errors:false, errorMessagge:''}});
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setformInputsHandle({...formInputsHandle, password: {text: e.target.value,errors:false, errorMessagge:''}});
  const handlePasswordConfirmation = (e: React.ChangeEvent<HTMLInputElement>) => setformInputsHandle({...formInputsHandle, passwordConfirm: {text: e.target.value,errors:false, errorMessagge:''}});

  const validateEmail = () => {
    const {email:{text: emailInput}}= formInputsHandle;
    const result = EMAIL_REGEX.test(emailInput);
    !result && setformInputsHandle({...formInputsHandle, email:{text:emailInput,errors:true, errorMessagge:'No es un correo valido'}})
    emailInput === '' && setformInputsHandle({...formInputsHandle, email:{text:'',errors:true, errorMessagge:'Te faltó poner tu email'}})
  }

  const validatePassword = () => {
    const {password:{text: passwordInput}}= formInputsHandle;
    const result = PASSWORD_REGEX.test(passwordInput);
    console.log(result, PASSWORD_REGEX.test(passwordInput))
    !result && setformInputsHandle({...formInputsHandle, password:{text:passwordInput,errors:true, errorMessagge:'La contraseña debe contener 1 letra mayuscula, 1 numero y al menos 5 caracteres'}})
    passwordInput === '' && setformInputsHandle({...formInputsHandle, password:{text:passwordInput,errors:true, errorMessagge:'Necesitas una contraseña'}})
  }

  const validatePasswordConfirm = () => {
    const {passwordConfirm,password:{text: passwordInput} }= formInputsHandle;
    passwordConfirm?.text !== passwordInput && setformInputsHandle({...formInputsHandle, passwordConfirm:{text:passwordConfirm?.text,errors:true, errorMessagge:'La contraseña no coincide'}})
    passwordConfirm?.text === '' && setformInputsHandle({...formInputsHandle, passwordConfirm:{text:'',errors:true, errorMessagge:'Necesitas confirmar tu contraseña'}})
  }

  const handleSumbit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {email:{text: emailInput}, password:{text: passwordInput}}= formInputsHandle;
    const user = {
      email: emailInput,
      password: passwordInput
    }
    console.log(user)
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
      changeFormAction,
      validateEmail,
      validatePassword,
      handlePasswordConfirmation,
      validatePasswordConfirm
    }}
    >
      {children}
    </LoginSignupContext.Provider>
  )
}

export default LoginSignupProvider