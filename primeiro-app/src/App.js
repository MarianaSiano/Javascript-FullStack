import { useState } from "react";

function App() {
  return (
    <div>
      <h1>Cadastrando Usuário</h1>

      <form>
        <label>Nome: </label> <br />
        <input placeholder="Digite seu nome" /><br />
        <br />

        <label>Email: </label> <br />
        <input placeholder="Digite seu email" /><br />
        <br />

        <label>Idade: </label> <br />
        <input placeholder="Digite sua idade" /> <br />
        <br />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default App;