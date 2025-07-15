// Função para interpretar o AQI e retornar descrição e cor
export const getAqiDescription = (index) => {
  switch (index) {
    case 1: return 'Bom';
    case 2: return 'Razoável';
    case 3: return 'Moderado';
    case 4: return 'Ruim';
    case 5: return 'Muito Ruim';
    default: return 'Desconhecido';
  }
}

export const getAqiColorClass = (index) => {
  switch (index) {
    case 1: return 'aqi-good';
    case 2: return 'aqi-fair';
    case 3: return 'aqi-moderate';
    case 4: return 'aqi-poor';
    case 5: return 'aqi-very-poor';
    default: return 'aqi-unknown';
  }
}