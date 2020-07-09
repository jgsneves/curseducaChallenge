import React from 'react';

const App = () => {

  function handleSubmit() {
    //
  }

  function handleInputChange() {
    //
  }

  return (
    <>
      <header>
        <h1>CursEduca</h1>
      </header>
      
      <main>
        <form onSubmit={handleSubmit}>
          <h2>Faça login para acessar conteúdo:</h2>

          <fieldset>

            <legend>
              <h2>Dados de login</h2>
            </legend>

            <div className="field">
              <label>Nome do Usuário</label>
              <input type="text" name="login" id="login" onChange={handleInputChange}/>
            </div>

            <div className="field">
              <label>Senha</label>
              <input type="text" name="password" id="password" onChange={handleInputChange}/>
            </div>

            <button type="submit">
              Login
            </button>
          </fieldset>
        </form>
      </main>
    </>
  );
}

export default App;
