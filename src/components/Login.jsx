import { useState } from 'react'

import SignUpForm from './SignUpForm';
import Authenticate from './Authenticate';



function Login() {
    const [token, setToken]= useState(null);
    
  
    return (
      <>
       <SignUpForm token={token} setToken={setToken} />
        <Authenticate />
      </>
    )
  }
  
  export default Login

