import { IShowModalProps } from '../../interfaces/interfaces';
import Form from '../Form/Form';
import { ModalContainer } from './Modal.styled'

const Modal = ({show, setShow}: IShowModalProps) => {

    if(!show){
        return null;
    }

  return (
    <ModalContainer onClick={()=>setShow(false)}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
            <div className='modal-header'>
                <h4 className='modal-title'>Modal Title</h4>
            </div>
            <div className='modal-body'>
                <Form />
            </div>
            <div className='modal-footer'>
                <button className='button' onClick={()=>setShow(false)}>Close</button>
            </div>
        </div>
    </ModalContainer>
  )
}

export default Modal