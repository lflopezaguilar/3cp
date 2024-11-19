import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import vj1img from './img/cat1.jpg';
import vj2img from './img/cat2.jpg';
import vj3img from './img/cat3.jpg';
import vj4img from './img/cat4.jpg';
import vj5img from './img/cat5.jpg';
import Component1 from './components/Component1.js';
import Component2 from './components/TicTacToe.jsx';
import Component3 from './components/Component3.js';
import Component4 from './components/Component4.js';
import Component5 from './components/Component5.js';
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Component1':
        return <Component1 />;
      case 'Component2':
        return <Component2 />;
      case 'Component3':
        return <Component3 />;
      case 'Component4':
        return <Component4 />;
      case 'Component5':
        return <Component5 />;
      default:
        return <div>Selecciona una imagen para ver el componente.</div>;
    }
  };

  return (
    <div className="App">
      <div className="menu">
        <div>
          <h1>Videojuegos navidad 2024 3CP</h1>
          <br></br>
        </div>
        <div class="row" bgcolor="blue" >
          <div class="col-12" ><img src={vj1img} alt="Component 1" onClick={() => setActiveComponent('Component1')} /></div></div>        
          <img src={vj2img} alt="Component 2" onClick={() => setActiveComponent('Component2')} />
        <img src={vj3img} alt="Component 3" onClick={() => setActiveComponent('Component3')} />
        <img src={vj4img} alt="Component 4" onClick={() => setActiveComponent('Component4')} />
        <img src={vj5img} alt="Component 5" onClick={() => setActiveComponent('Component5')} />
      </div>
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
