import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import SideCart from "./component/SideCart/SideCart";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="header m-auto mb-3">
         <Header></Header>

       </div>
       <div className="main row">
          <div className="home-container col-md-8">
               <Home></Home>
          </div>
          <div className="sideCart col-md-4 card">
                    <SideCart>

                    </SideCart>
          </div>
       </div>
    </>
  );
}

export default App;
