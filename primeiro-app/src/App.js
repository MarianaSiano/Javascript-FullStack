import Nome from "./Componentes/Nome";

function App() {
  return (
    <div>
      <h1>Componente App</h1>
      <Nome aluno="Vitor" idade="17" />
      <br />
      <Nome aluno="Ana Julia" idade="57" />
      <br />
    </div>
  );
}

export default App;