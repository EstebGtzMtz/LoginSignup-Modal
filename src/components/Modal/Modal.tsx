import { useContext } from 'react';
import { LoginSignupContext } from '../../Context/LoginSignupContext';
import { IShowModalProps } from '../../interfaces/interfaces';
import Form from '../Form/Form';
import { ModalContainer } from './Modal.styled'

const Modal = ({show, setShow}: IShowModalProps) => {

  const {isLogin, changeFormAction} = useContext(LoginSignupContext);

    if(!show){
        return null;
    }

  return (
    <ModalContainer onClick={()=>setShow(false)}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <div className='modal-title'>
            {
              isLogin ? 'Iniciar sesión' : 'Crea una cuenta'
            }
          </div>
        </div>
        <div className='modal-body'>
          <Form />
        </div>
        <div className='modal-footer' onClick={changeFormAction}>
          {
            isLogin ? 
            <>
              <a>¿No tienes una Cuenta? <u>Crea una nueva</u></a>
            </> : 
            <>
              <a>¿Ya tienes Cuenta? <u>Inicia sesión</u></a>
            </>
          }
        </div>
      </div>
    </ModalContainer>
  )
}

export default Modal