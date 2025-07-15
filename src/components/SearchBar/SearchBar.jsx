import React from 'react'
import './SearchBar.module.css'

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) { // Garante que a cidade não está vazia
      onSearch(city);
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome da cidade..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </form>
  )
}

export default SearchBar