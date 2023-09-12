import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SingleData from './pages/SingleData'
import Form from './components/Login'
import './App.css'
import Login from './components/Login'
import Cart from './pages/Cart'

function App() {
  

  return (
   <div className= 'app'>
    <Routes>
  
    <Route path='/' element= {<Login />}/>
    <Route path='/products' element= {<Home />}/>
    <Route path='/:id' element= {<SingleData />}/>
    <Route path='/shoppingcart' element= {<Cart />}/>
    
   


    </Routes>
    </div>
  )
}










export default App
