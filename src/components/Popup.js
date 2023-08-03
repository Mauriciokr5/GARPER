import React, { useState, useEffect } from 'react';
// import './Popup.css'; // Importa el archivo de estilos

function Popup({ onClose }) {
    useEffect(() => {
        const handleScroll = () => {
            handleCloseWithAnimation();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [onClose]);

    const handleCloseWithAnimation = () => {
        // Agrega la clase para iniciar la animación de fade-out
        const overlay = document.querySelector(".popup-overlay");
        overlay.classList.add("fade-out");

        // Espera a que termine la animación antes de cerrar realmente el popup
        setTimeout(() => {
            onClose();
        }, 300); // Asegúrate de que este tiempo coincida con el tiempo de transición en CSS
    };

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            handleCloseWithAnimation();
        }
    };
    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <div className="popup-content">
                <img
                    className="popup-image"
                    src="logo.jpg"
                    alt="Popup Image"
                    onClick={handleOverlayClick}
                />
            </div>
        </div>
    );
}

export default Popup;
