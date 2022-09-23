import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import './index.css';
import LoginSignupProvider from './Context/LoginSignupProvider';


function WithContext(){
  return (
    <LoginSignupProvider>
      <App />
    </LoginSignupProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WithContext />
  </React.StrictMode>
)
