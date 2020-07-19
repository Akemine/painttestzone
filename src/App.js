import React from 'react';
import './App.css';
import { MyNavbar } from './components/navbar/MyNavbar';
import MyFooter from './components/footer/MyFooter';



import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    
    <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column', height:'100vh'}} className="container">

      <header className="App-header mt-2">
          <MyNavbar></MyNavbar>
      </header>

      <div className="App-content">
      </div>

      <footer className="App-footer mb-2">
          <MyFooter></MyFooter>
      </footer>

    </div>
    
  );
}

export default App;
