import { ILoginSignupProviderProps } from "../interfaces/interfaces"
import { LoginSignupContext } from "./LoginSignupContext"

const LoginSignupProvider = ({children}:ILoginSignupProviderProps) => {
  return (
    <LoginSignupContext.Provider
    value={{}}
    >
      {children}
    </LoginSignupContext.Provider>
  )
}

export default LoginSignupProvider