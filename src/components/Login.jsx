import { useState } from "react"
import { Link } from "react-router-dom"


function Login(){
    const [email, SetEmail] = useState("")
    const [password, SetPassword] =useState("")
    
    
    function handleSubmit(e){
        e.preventDefault()
        console.log({email, password})

    }
    
    function handleChangeEmail(e){
        SetEmail(e.target.value)
    }
    console.log({email})
    
    function handleChangePassword(e){
        SetPassword(e.target.value)
    }
    console.log({password})

  
    
    
    return(
        <div className= "app">
            <h2>Login</h2>
            <form onSubmit = {handleSubmit}>
        <label>
            Email:
            <input type="text" onChange= {handleChangeEmail} value = {email}/>
            
        </label>
       
        
        <label>
            Password:
            <input type="password" onChange= {handleChangePassword} value = {password} />
           
        </label>

      <Link to= "/products">
        <button>Submit</button>
      </Link>


            </form>
        </div>
    )
}











export default Login;




