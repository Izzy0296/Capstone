import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import BasicExample from '../components/NavBar'
import Nav from '../components/NavBar'
import Form from '../components/Login'
import Login from '../components/Login'




const Home = () => {
    const [items, setItems] = useState([])
    //const [newdata, setNewData] = useState("")
    const navigate= useNavigate()
   
  useEffect(()=> {
    async function GetAllData(){
        try{
            const response= await fetch("https://fakestoreapi.com/products")
            const data= await response.json()
            console.log(data)
            setItems(data)


        }catch(error){

        }


    }
    GetAllData()

  },[])

function Sort(){
  //logic
  //use items state items.sort
  //within sort method use a callback
  //within the callback use sorting logic
  //items.sort return new array
  //call setitems and store that value
  //create button with jsx using onclick
}
function Filter(){
  //logic
  //use items state items.filter
  //within sort method use a callback
  //within the callback use sorting logic
  //items.sort return new array
  //call setitems and store that value
  //create button with jsx using onclick
}



return(
    <div className= "container">
        
        < Nav />
       
        
       
       
        
      
        {
               items.map((info)=>{
                return (
                <div>
                <img className = "image" src = {info.image} />
                
                <h2 key={info.title}>{info.title}</h2> 
                
                <h3 key={info.price}>Price: ${info.price} </h3>
               
                <h3 key={info.description}>{info.description} </h3>
                
                <h3 key={info.category}>{info.category} </h3>
                
               <button onClick={()=>navigate(`/${info.id}`)}>View</button>
                </div>
                )
    
            })

        }
    
    
    
    
    </div>
)

}







  export default Home