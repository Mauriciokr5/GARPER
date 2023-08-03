// App.js
import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Popup from './Popup'; // Importa el componente Popup
import Header from './Header';
import Home from './Home';
import Especialidades from './Especialidades';
import Footer from './Footer';


function App() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (

    <div className="App">
      <Header />
      <Home />
      <Especialidades />
      <Footer />

      {showPopup && <Popup onClose={handleClosePopup} />}
      
      {/* <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Especialidades" element={<Especialidades />}></Route>
        </Routes>
        {showPopup && <Popup onClose={handleClosePopup} />}
      </Router> */}
    </div>
  );
}

export default App;
