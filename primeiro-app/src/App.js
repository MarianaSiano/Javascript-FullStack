import Nome from "./Componentes/Nome";
import { useState } from "react";

function App() {
  const [aluno, setAluno] = useState("Daniel");

  function handleChangeName(nome) {
    setAluno(nome);
  }

  return (
    <div>
      <h1>Componente App</h1>
      <br />

      <h2>Olá, {aluno}</h2>
      <button onClick={ () => handleChangeName("Marina Carvalho") }>Alterar Nome</button>
    </div>
  );
}

export default App;