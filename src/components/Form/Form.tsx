import { LoginSignupContext } from '../../Context/LoginSignupContext';
import { FormContainer } from './Form.styled';
import { useContext } from 'react';

const Form = () => {

    const {formInputsHandle, handleEmail, handlePassword, showPassword, setShowPassword, handleSumbit} = useContext(LoginSignupContext);

  return (
    <FormContainer>
        <form className='login-signup-form'>
            <div className='embed-submit-field'>
                <input type="email" value={formInputsHandle.email} onChange={handleEmail}/>
            </div>
            <div className='embed-submit-field'>
                <input type={showPassword ? 'text' : 'password'} value={formInputsHandle.password} onChange={handlePassword}/>
                <button 
                    onClick={(e)=>{
                        setShowPassword(!showPassword)
                        e.preventDefault()
                    }}
                >{showPassword ? 'Ocultar' : 'Mostrar'}</button>
            </div>
            <div>
                <button onClick={handleSumbit}>Entra</button>
            </div>
        </form>
    </FormContainer>
  )
}

export default Form