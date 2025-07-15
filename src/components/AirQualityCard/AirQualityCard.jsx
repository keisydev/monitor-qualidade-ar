import React from 'react'
import AQIDescription from '../AQIDescription/AQIDescription'
import './AirQualityCard.module.css'

const AirQualityCard = ({ data, locationName }) => {
  if (!data || data.list.length === 0) {
    return <p>Nenhum dado de qualidade do ar disponível.</p>;
  }

  const currentAirData = data.list[0];
  const aqi = currentAirData.main.aqi;
  const components = currentAirData.components;
  const dateTime = new Date(currentAirData.dt * 1000).toLocaleString(); // Converte timestamp

  return (
    <div className="air-quality-card">
      <h2>Qualidade do Ar em {locationName || 'Localização Desconhecida'}</h2>
      <p className="last-updated">Última atualização: {dateTime}</p>

      <div className="aqi-section">
        <h3>Índice de Qualidade do Ar (AQI): {aqi} - <AQIDescription aqi={aqi} /></h3>
      </div>

      <h4 className="pollutants-title">Componentes de Poluentes (μg/m³):</h4>
      <ul className="pollutant-list">
        <li>Monóxido de Carbono (CO): <span>{components.co.toFixed(2)}</span></li>
        <li>Óxido Nítrico (NO): <span>{components.no.toFixed(2)}</span></li>
        <li>Dióxido de Nitrogênio (NO2): <span>{components.no2.toFixed(2)}</span></li>
        <li>Ozono (O3): <span>{components.o3.toFixed(2)}</span></li>
        <li>Dióxido de Enxofre (SO2): <span>{components.so2.toFixed(2)}</span></li>
        <li>Material Particulado (PM2.5): <span>{components.pm2_5.toFixed(2)}</span></li>
        <li>Material Particulado (PM10): <span>{components.pm10.toFixed(2)}</span></li>
        <li>Amônia (NH3): <span>{components.nh3.toFixed(2)}</span></li>
      </ul>

      <p className="data-source"><small>Dados fornecidos por OpenWeatherMap</small></p>
    </div>
  )
}

export default AirQualityCard