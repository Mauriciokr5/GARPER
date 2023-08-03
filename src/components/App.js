// App.js
import React, { useState } from 'react';
import Popup from './Popup'; // Importa el componente Popup
import Header from './Header';

function App() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <Header />
      {/* Contenido principal de tu página */}
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>
      <h1>Bienvenido a mi página</h1>

      {/* Mostrar el pop-up condicionalmente */}
      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
}

export default App;
