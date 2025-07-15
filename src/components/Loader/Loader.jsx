import React from 'react'
import './Loader.module.css' 

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Carregando dados...</p>
    </div>
  )
}

export default Loader