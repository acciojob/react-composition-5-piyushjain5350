
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {
  const data1=['Tab 1','Tab 2','Tab 3']
  const data2=['Tab A','Tab B','Tab C']
  return (
    <div>
        <Tabs content={data1}/>
        <Tabs content={data2}/>
    </div>
  )
}

export default App
