import { useState, useEffect } from 'react'
import Loader from './components/Loader/Loader'
import AirQualityCard from './components/AirQualityCard/AirQualityCard'
import SearchBar from './components/SearchBar/SearchBar'


function App() {
  //Estado para armazenar os dados da qualidade do ar 
  const [airQualityData, setAirQualityData] = useState(null)

  //Estado para possíveis erros na requisição 
  const [error, setError] = useState(null)
  
  //Estado para indicar que a requisição está carregando
  const [loading, setLoading] = useState(true)

  //Coordenadas
  const [lat, setLat] = useState(47.16); // Estado para latitude
  const [lon, setLon] = useState(-8.36); // Estado para longitude
  const [locationName, setLocationName] = useState('Guimarães')

  //Chave API
  const API_KEY = '5a5bd254774964254bd0cf882540aec6'

  useEffect(()=> {
    const fetchAirQuality = async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        )

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        setAirQualityData(data) //armazena os dados do estado
      } catch (err) {
        console.error("Erro ao buscar dados de qualidade do ar", err)
        setError(err.message)
      }finally{
        setLoading(false) // indica que o carregamento terminou
      }
      if (lat && lon) { // Só busca se tivermos lat e lon
      fetchAirQuality();
      } else {
      setLoading(false); // Se não tiver lat/lon, não está carregando
      }

    }

    fetchAirQuality() //chama a função para buscar dados
  }, [lat, lon])

  if (loading) {
    return <Loader/>
  }

  if (error){
    return <div className="App">Erro: {error}. Por favor, tente novamente mais tarde.</div>
  }

  if (!airQualityData || airQualityData.list.lenght === 0){
    return <div className="App">Nenhum dado de qualidade do ar encontrado para esta localização.</div>
  }

  const currentAirData = airQualityData.list[0]
  const aqi = currentAirData.main.aqi
  const components = currentAirData.components
  const dateTime = new Date(currentAirData.dt * 1000.).toLocaleString()// Converte timestamp para data legível

  const handleSearch = (city) => {
  console.log(`Buscando dados para: ${city}`)
  setLocationName(city)
}

return (
  <div className="App">
    <h1 className="text-center">Monitor de Qualidade do Ar</h1>
    <SearchBar onSearch={handleSearch} /> {/* Novo componente SearchBar */}

    {airQualityData && ( // Só renderiza o card se tivermos dados
      <AirQualityCard data={airQualityData} locationName={locationName} />
    )}
  </div>
);
}

export default App;
