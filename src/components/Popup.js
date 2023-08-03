import React, { useState, useEffect } from 'react';
// import './Popup.css'; // Importa el archivo de estilos

function Popup({ onClose }) {
    useEffect(() => {
        const handleScroll = () => {
          onClose();
        };
    
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [onClose]);

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      };
  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content">
        <img
          className="popup-image"
          src="https://scontent.ftlc2-1.fna.fbcdn.net/v/t39.30808-6/275180918_111798804762022_5890687699337733883_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEENAvji00sRGP0BNAfUt6dIL3mLuIXiAcgveYu4heIB5uKlAo8K-pR0byaR_I5KVoHUmT0Q0TmWPHfLGXN2nHB&_nc_ohc=b_czaT3IIHcAX8pIoQu&_nc_ht=scontent.ftlc2-1.fna&oh=00_AfCu1O92HajRExAi_nLvxPmdfxSQqAc0_LDOUHBmtroi7Q&oe=64D0F7FC"
          alt="Popup Image"
          onClick={handleOverlayClick}
        />
        <button className="popup-close-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Popup;
