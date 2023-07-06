import React from "react";
import './app.css'
import Navbar from "./components/navbar/navbar.js";
import Banner from "./components/banner/banner.js";
import Rowpost from "./components/rowpost/rowpost.js";
import {comedy,action} from './url'
function App() {
  return (
   <div>
   <Navbar />
   <Banner />
   <Rowpost url={action} title="Actions" cls="poster"   />
   <Rowpost url={comedy} title="Comedy Movie" cls="smallposter"/>
   </div>
  );
}

export default App;
