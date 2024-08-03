import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';
import int from './Intesamente.jpg'

function App() {
  const [jump, setJump] = useState(false); // Estado para manejar la animación
  const [noClickCount, setNoClickCount] = useState(0); 
  const [openModal, setOpenModal] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const handleNoClick = () => {
    setJump(true); // Activa la animación de salto
    setNoClickCount(noClickCount + 1);
    
    // Desactiva la animación de salto después de 0.5 segundos (duración de la animación)
    setTimeout(() => {
      setJump(false);
    }, 500);
  };

  const openSI = () => {
    setOpenModal(true);
    setConfetti(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setConfetti(false);
  };

  return (
    <div className='todo'>
      {confetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <div>
        <div className='inicio'>
          <h1>VAMOS AL CINE</h1>
          <h2>👉👈</h2>
          <div className='botones'>
            <div className='boton-si-container'>
              <button 
                className={`si ${jump ? 'jump' : ''}`} 
                onClick={openSI}
              >
                SI
              </button>
            </div>
            <div className='boton-no-container'>
              <button className='no' onClick={handleNoClick}>NO</button>
            </div>
          </div>
        </div>
        {noClickCount >= 3 && (
          <div>
            <h1>YA DALE AL SI, QUE ESPERAS EL BOTON NO, NO FUNCIONA 🙄</h1>
          </div>
        )}
        {openModal && (
          <div className="modal">
            <div className="modal-content">
              <h1 className="modal-title">SABIA QUE DIRIAS QUE SI 😁</h1>
              <div className="modal-body">
                <p className="modal-label">Lugar</p> 
                <p className="modal-info">Cineplanet 🪐 Mall Aventura</p>
                <p className="modal-label">Película</p>
                <p className="modal-info">INTENSAMENTE 💖</p>
                <img src={int} alt="Intensamente" />
                <p className="modal-small">Porsiacaso no la e visto, mentí 😁</p>
                <p className="modal-label">Hora</p>
                <p className="modal-info">6PM</p>
                <p className="modal-smalls">Enviame el Pantallaso para alistarme mensa</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
