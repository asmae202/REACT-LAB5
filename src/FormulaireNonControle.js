import { useRef } from 'react';
import './FormulaireNonControle.css';

function FormulaireNonControle() {
  const nomRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nom = nomRef.current.value;
    const email = emailRef.current.value;
    alert(`Nom : ${nom}, Email : ${email}`);
  };

  return (
    <div className="formulaire-nc-container">
      <h2>Formulaire Non-Contrôlé</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nomRef} placeholder="Nom" required />
        <input type="email" ref={emailRef} placeholder="Email" required />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default FormulaireNonControle;