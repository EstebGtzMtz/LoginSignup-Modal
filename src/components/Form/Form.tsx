import { LoginSignupContext } from '../../Context/LoginSignupContext';
import { FormContainer } from './Form.styled';
import { useContext } from 'react';

const Form = () => {

  const {formInputsHandle, handleEmail, handlePassword, showPassword, setShowPassword, handleSumbit, isLogin} = useContext(LoginSignupContext);

  return (
    <FormContainer>
      <form className='login-signup-form' onSubmit={handleSumbit}>
        <div className='embed-submit-field'>
          <input type="email" value={formInputsHandle.email} onChange={handleEmail} placeholder='Tu correo electrónico'/>
        </div>
        <div className='embed-submit-field'>
          <input type={showPassword ? 'text' : 'password'} value={formInputsHandle.password} onChange={handlePassword} placeholder='Tu contraseña'/>
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
              <a>¿Olvidaste tu contraseña?</a>
            </> : 
            <div className='privacy-and-terms'>
              <div className='content'>
                Al crear una cuenta, estoy de acuerdo con las
                <a href="https://ayudasegundamano.force.com/s/news/t-rminos-y-condiciones-de-pago-MCZ2NJJB2H2VAWFALJNH7DZPQ46U">
                  {` Condiciones de uso`}
                </a> 
                {` y la `}
                <a href="https://cool-puppy-873167.netlify.app/">Politica de privacidad</a>
              </div>
            </div>
        }
      </form>
    </FormContainer>
  )
}

export default Form