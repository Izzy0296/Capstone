import React, {useEffect, useState} from 'react'
import {useParams}  from 'react-router-dom'
import Nav from '../components/NavBar'


const SingleData= ()=>{
const [singledata, setSingleData] = useState([])
let {id} = useParams()

useEffect(()=>{
async function RenderSingleData(){
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const result = await response.json()
        setSingleData(result)
    }catch(error){
        console.log("failed")
    }

}
RenderSingleData()






},[])


return(
 
    <div>
        <div>
            <Nav />
        </div>
       
 <img className = "image2" src = {singledata.image}  />
    
    <p>{singledata.title}</p>
    <p>{singledata.description}</p>
    <p>{singledata.category}</p>
   




    </div>
)

}



export default SingleData