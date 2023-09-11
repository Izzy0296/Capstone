import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SingleData from './pages/SingleData'
import './App.css'

function App() {
  

  return (
   <div className= 'app'>
    <Routes>
    
    <Route path='/' element= {<Home />}/>
    <Route path='/:id' element= {<SingleData />}/>


    </Routes>
    </div>
  )
}










export default App
