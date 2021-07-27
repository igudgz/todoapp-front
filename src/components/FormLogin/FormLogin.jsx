import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Form.module.css';

const FormLogin = () => {
  return (
    <div className={styles.caixaTransparente}>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="input-email" name="email" />
        </div>

        <div>
          <label htmlFor="senha">Senha</label>
          <input type="text" id="senha" name="senha" />
        </div>

        <button  id="btn-login">
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
