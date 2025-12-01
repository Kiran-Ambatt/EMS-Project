import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home";

function App() {
  return (
    <div>
      {/*   <Login /> */}
      <Home />
    </div>
  );
}

export default App;
