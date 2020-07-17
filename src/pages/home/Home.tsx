import React, { FormEvent, useState, ChangeEvent } from 'react';
import HeaderNavBar from '../../components/navbar/HeaderNavBar';
import FooterContent from '../../components/footer/Footer';
import { FiLogIn } from 'react-icons/fi';
import api from '../../service/api';
import './Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [loginHash, setLoginHash] = useState({
    access_token: '',
  });

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { email, password } = formData;
    const data = new FormData();

    data.append('email', email);
    data.append('password', password);

    await api.post('/auth/login', data).then(response => {
      const hash = response.data;
      setLoginHash(hash);
      console.log(hash);
    });
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({...formData, [name]:value});
  }

  return (
    <>
      <HeaderNavBar />
      
      <main className="mainContainer">
        <form onSubmit={handleSubmit}>
          <h2>Faça login para acessar conteúdo:</h2>

          <fieldset>

            <legend>
              <h2>Dados de login</h2>
            </legend>

            <div className="field">
              <label>
                E-mail do Usuário
                <input type="email" name="email" id="email" onChange={handleInputChange}/>
              </label>
            </div>

            <div className="field">
              <label>
                Senha
                <input type="password" name="password" id="password" onChange={handleInputChange}/>
              </label>
            </div>

            <button type="submit">
              <span>
                  <FiLogIn />
              </span>
              <strong>
                  Login
              </strong>
            </button>
          </fieldset>
        </form>
      </main>
      <FooterContent />
    </>
  );
}

export default Home;
