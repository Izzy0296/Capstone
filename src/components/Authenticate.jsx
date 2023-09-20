import { useState } from "react";

export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [username, setUsername]=useState(null)
  
    async function handleClick() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/auth/login",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        setSuccessMessage(result.message);
        const usernameFromData = result.data.username;
    
    setUsername(usernameFromData); 
      } catch (error) {
        setError(error.message);
      }
    }
  
    return (
      <div>
        <h2>Authenticate</h2>
        <p>Logged in as: {username}</p>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>
      </div>
    );
  }
