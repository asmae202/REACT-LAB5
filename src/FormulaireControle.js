import { useState } from 'react';
import './FormulaireControle.css';

function FormulaireControle() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom : ${nom}, Email : ${email}`);
  };

  return (
    <div className="formulaire-container">
      <h2>Formulaire d'inscription</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Nom"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default FormulaireControle;