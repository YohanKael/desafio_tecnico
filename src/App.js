import './App.css';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
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
