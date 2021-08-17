import { React, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Form.module.css';
import MyContext from '../../contexts/MyContext';
const FormLogin = () => {
  const { setId, setEmail, email } = useContext(MyContext);
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(`http://localhost:3050/usuarios/${email}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        setId(res.result[0].ID);
      });
    history.push('/tarefas');
  };
  return (
    <div className={styles.caixaTransparente}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="input-email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="senha">Senha</label>
          <input type="text" id="senha" name="senha" />
        </div>

        <button type="submit" id="btn-login">
          Entrar
        </button>
      </form>
      <Link to="/cadastro">
        <span>Não é cadastrado? Cadastre-se</span>
      </Link>
    </div>
  );
};

export default FormLogin;
