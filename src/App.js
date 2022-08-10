import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        Dashboard
        Desafio Técnico Frontend
        <button>Filtrar</button>
      </div>
      <div className='Graficos'>
        <div className='GraficoBarras'>
          <div>Barras</div>
        </div>
        <div className='GraficoScatter'>
          <div>Scatter</div>
        </div>
      </div>
    </div>
  );
}

export default App;
