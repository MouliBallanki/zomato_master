import React from "react";

// HOC
import HomeLayoutHoc from "./HOC/Home.HOC";

// components
import Temp from "./Components/Temp";
import Master from "./Components/master";


function App() {
  return (
    <>
      <HomeLayoutHoc path = "/" exact component={Temp}/>
      <HomeLayoutHoc path = "/:type" exact component={Master}/>
    </>
  );
}

export default App;
