import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import SideCart from "./component/SideCart/SideCart";

function App() {
  const [watchTime, setWatchTime] = useState("");

     const handleWatchTime = (watchTime) => {
       const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
      
        if(previousWatchTime){
           const totalWatchTime = previousWatchTime + watchTime;
           localStorage.setItem("watchTime",totalWatchTime);
           setWatchTime(totalWatchTime);

        }else{
          localStorage.setItem("watchTime", watchTime);
          setWatchTime(watchTime);
        }

     };


  return (
    <>
       <div className="header m-auto mb-3">
         <Header></Header>

       </div>
       <div className="main row">
          <div className="home-container col-md-8">
               <Home handleWatchTime = {handleWatchTime}></Home>
          </div>
          <div className="sideCart col-md-4 card">
                    <SideCart watchTime = {watchTime}>

                    </SideCart>
          </div>
       </div>
    </>
  );
}

export default App;
