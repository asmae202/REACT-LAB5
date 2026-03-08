import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>✨ TP Formulaires et State React ✨</h1>

      <h2 className="section-title">Formulaire Contrôlé</h2>
      <div className="form-section">
        <FormulaireControle />
      </div>

      <h2 className="section-title">Formulaire Non-Contrôlé</h2>
      <div className="form-section">
        <FormulaireNonControle />
      </div>

      <h2 className="section-title">Lifting State Up – Convertisseur de Température</h2>
      <div className="temp-section">
        <TemperatureConvertor />
      </div>
    </div>
  );
}

export default App;
