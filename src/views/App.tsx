import { useContext } from 'react'
import Modal from '../components/Modal/Modal'
import { LoginSignupContext } from '../Context/LoginSignupContext'
import './App.css'

function App() {

  const {show, setShow} = useContext(LoginSignupContext);

  return (
    <div>
        <button onClick={()=> setShow(true)}>Show Modal</button>
        <Modal show={show} setShow={setShow}/>
    </div>
  )
}

export default App
