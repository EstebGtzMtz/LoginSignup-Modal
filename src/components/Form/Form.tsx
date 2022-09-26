import { LoginSignupContext } from '../../Context/LoginSignupContext';
import { FormContainer } from './Form.styled';
import { useContext } from 'react';
import {AiOutlineCheckCircle, AiFillCloseCircle} from 'react-icons/ai'

const Form = () => {

  const {formInputsHandle, handleEmail, handlePassword, showPassword, setShowPassword, handleSumbit, isLogin, validateEmail, validatePassword, handlePasswordConfirmation,validatePasswordConfirm} = useContext(LoginSignupContext);

  const {
    email:{text: emailInput, errors: emailError,errorMessagge }, 
    password:{text: passwordInput, errors: passwordError, errorMessagge: passwordErrorMessagge}, 
    passwordConfirm}= formInputsHandle;

  return (
    <FormContainer>
      <form className='login-signup-form' onSubmit={handleSumbit}>
        <div className='embed-submit-field'>
          <input type="email" value={emailInput} onChange={handleEmail} onBlur={validateEmail} placeholder='Tu correo electrónico'/>
          {
            emailError &&
            <>
              <div className='error-message-container'>
                <div className='error-description'>
                  {errorMessagge}
                </div>
              </div>
              <AiFillCloseCircle className='error-icon'/>
            </>
          }
        </div>

        <div className='embed-submit-field'>
          <input type={showPassword ? 'text' : 'password'} value={passwordInput} onChange={handlePassword} onBlur={validatePassword} placeholder='Tu contraseña'/>
          {
            passwordError && !isLogin && 
            <>
              <div className='error-message-container'>
                <div className='error-description'>
                  {passwordErrorMessagge}
                </div>
              </div>
              <AiFillCloseCircle className='error-icon'/>
            </>
          }
          {
            isLogin && 
            <button 
              onClick={(e)=>{
                setShowPassword(!showPassword)
                e.preventDefault()
              }}
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          }
        </div>
        {
          !isLogin &&
          <div className='embed-submit-field'>
            <input type="password" value={passwordConfirm?.text} onChange={handlePasswordConfirmation} onBlur={validatePasswordConfirm} placeholder='Repite Tu contraseña'/>
            {
              passwordConfirm?.errors && 
              <>
                <div className='error-message-container'>
                  <div className='error-description'>
                    {passwordConfirm?.errorMessagge}
                  </div>
                </div>
                <AiFillCloseCircle className='error-icon'/>
              </>
            }
          </div>
        }

        <div>
          <button disabled={emailError || passwordError } onClick={handleSumbit} className='form-button'>
            Entra
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