import React from "react";

// HOC
import HomeLayoutHoc from "./HOC/Home.HOC";

// components
import Temp from "./Components/Temp";


function App() {
  return (
    <>
      <HomeLayoutHoc path = "/" exact component={Temp}/>
    </>
  );
}

export default App;
