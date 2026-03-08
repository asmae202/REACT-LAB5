import { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import './TemperatureConvertor.css';

function TemperatureConvertor() {
  const [celsius, setCelsius] = useState('');

  return (
    <div className="temp-container">
      <h2>Convertisseur de Température</h2>
      <TemperatureInput
        temperature={celsius}
        onTemperatureChange={setCelsius}
      />
      <p>
        {celsius
          ? `Température saisie : ${celsius} °C`
          : 'Aucune température saisie'}
      </p>
    </div>
  );
}

export default TemperatureConvertor;