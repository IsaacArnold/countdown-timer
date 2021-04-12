import React from "react";
import "./App.scss";
import Title from "./Components/Title";
import Timer from "./Components/Timer";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Title />
      <Timer />
      <Footer />
    </div>
  );
}

export default App;
