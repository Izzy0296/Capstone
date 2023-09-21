import { useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../cartcontext";




export default function SignUpForm({ setToken }) {
  const { loginFunc, login } = useContext(CartContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate()



  async function handleSubmit(event) {
    event.preventDefault();

    if (username.length < 8) {
      setError("Username must be at least 8 characters long");
      return;
    }

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      });
      const result = await response.json();
      //setToken(result.token)

      loginFunc(result.token) //doing a check if the token exists, then youre logged in, otherwise false
      navigate('/products')
      console.log(result)
    } catch (error) {
      setError(error.message)
    
    }

  }

  return (
    <>



      <h2 className = "sign">Sign in</h2>
      {error && <p>{error}</p>}
      <form className = "form" onSubmit={handleSubmit} >
        <label>
          Username:{""} <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:{""} <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>

      </form>
    </>


  )

}