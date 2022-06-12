
import { useState } from "react";
import "./App.css";
import TripList from "./Component/TripList";

function App() {
  const[showTrips,setShowTrips]=useState(true)
  return (
    <div className="App">
      <button onClick={()=>setShowTrips(false)}>hide trips</button>
      <button onClick={()=>setShowTrips(true)}>Show trips</button>
      {showTrips && <TripList />}
    </div>
  );
}

export default App;
