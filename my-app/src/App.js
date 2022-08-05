import Data from "/Users/mac/Documents/Travel Journal/my-app/src/Components/Data.js"
import './App.css';
import Navbar  from "./Components/Navbar";
import Travel from "./Components/Travel"

function App(){
  const travel = Data.map( lists =>{
return (
  <div>
  <Travel 
     list = {lists}
  />
  </div>
)
  }
    )
    return(
      <div>
        <Navbar />
      {travel}
      </div>

    )
}

export default App;
