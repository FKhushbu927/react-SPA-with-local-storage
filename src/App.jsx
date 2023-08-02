import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SideCart from './component/Home/sideCart/SideCart';
import Header from './component/Header/Header';
import Home from './component/Home/Home';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="header">
         <Header></Header>

       </div>
       <div className="main">
          <div className="home-container">
               <Home></Home>
          </div>
          <div className="sideCart">
                    <SideCart>

                    </SideCart>
          </div>
       </div>
    </>
  )
}

export default App
