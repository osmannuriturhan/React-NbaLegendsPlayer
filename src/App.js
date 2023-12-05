import Assets from "./assets";
import "./App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import React, { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <Assets />
      <Header setSearchText={setSearchText} />
      <CardContainer searchText={searchText} />
    </div>
  );
}

export default App;
