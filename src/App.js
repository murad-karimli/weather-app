import DarkModeToggle from "./components/darkModeToggle";
import{GrLocation} from "react-icons/gr"
import{BsSearch} from "react-icons/bs"
import { useEffect, useState } from "react";


function App() {
  const [weather ,setWeather]=useState({weather:[1]});
  async function fet()
  {
    const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=baku&appid=8640a8984d6add7bd1295ee3090e7f41&lang=az`);
    const json = await data.json()
    console.log(json)
    setWeather(json)
  }
  useEffect(()=>{
   fet()
  },[])

  

  return (
    <>
    <nav className="flex justify-between">
   <div>
   <GrLocation className="inline mx-2"/>
    <span>location</span>
   </div>
    <div>
    <BsSearch className="inline" size={20}/>
        <input className="bg-inherit p-2" placeholder="Search city"/>
    </div>
    
    <DarkModeToggle />
     <span>{weather.weather[0].description}</span>
    {/* <span>{weather.sys.country}</span> */}
    <img src= {`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png` } alt="icon" /> 
    </nav>
    </>
  );
}

export default App;
