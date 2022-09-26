import { LoginSignupContext } from '../../Context/LoginSignupContext';
import { FormContainer } from './Form.styled';
import { useContext } from 'react';

const Form = () => {

  const {formInputsHandle, handleEmail, handlePassword, showPassword, setShowPassword, handleSumbit, isLogin} = useContext(LoginSignupContext);

  const {email:{text: emailInput}, password:{text: passwordInput}}= formInputsHandle;

  return (
    <FormContainer>
      <form className='login-signup-form' onSubmit={handleSumbit}>
        <div className='embed-submit-field'>
          <input type="email" value={emailInput} onChange={handleEmail} placeholder='Tu correo electrónico'/>
        </div>
        <div className='embed-submit-field'>
          <input type={showPassword ? 'text' : 'password'} value={passwordInput} onChange={handlePassword} placeholder='Tu contraseña'/>
          <button 
            onClick={(e)=>{
              setShowPassword(!showPassword)
              e.preventDefault()
            }}
          >
            {showPassword ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>
        <div>
          <button onClick={handleSumbit} className='form-button'>
            {
              isLogin ? 'Entra' : 'Crea una cuenta'
            }
          </button>
        </div>
        {
          isLogin ? 
            <>
              <a className='forgot-password'>¿Olvidaste tu contraseña?</a>
            </> : 
            <div className='privacy-and-terms'>
              <div className='content'>
                Al crear una cuenta, estoy de acuerdo con las
                <a href="https://ayudasegundamano.force.com/s/news/t-rminos-y-condiciones-de-pago-MCZ2NJJB2H2VAWFALJNH7DZPQ46U" target='_blank'>
                  {` Condiciones de uso `}
                </a> 
                {`y la `}
                <a href="https://cool-puppy-873167.netlify.app/" target='_blank'>Politica de privacidad</a>
              </div>
            </div>
        }
      </form>
    </FormContainer>
  )
}

export default Form