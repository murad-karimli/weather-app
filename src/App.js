import DarkModeToggle from "./components/darkModeToggle";
import{GrLocation} from "react-icons/gr"
import{BsSearch} from "react-icons/bs"

function App() {
 async function fet()
  {
    const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44&lon=41&appid=8640a8984d6add7bd1295ee3090e7f41`);
    const json = await data.json()
    console.log(json)
  }
  fet()

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
    </nav>
    </>
  );
}

export default App;
