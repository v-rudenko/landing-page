import React from 'react'
import "./App.scss";
import Title from './components/title/Title';
import Navigation from "./components/UI/navigation/Navigation";

function App() {
  const darkColor = "dark";
  return <React.Fragment>
    <div className='App'>
      <Navigation/>
      <Title/>
    </div>
  </React.Fragment>;
}

export default App;
