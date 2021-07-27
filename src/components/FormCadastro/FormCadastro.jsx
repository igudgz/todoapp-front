import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from '../FormLogin/Form.module.css';
const FormCadastro = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [modalOk, setModalOk] = React.useState(false);
  const [modalErro, setModalErro] = React.useState(false);
  let history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const cadastro = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      'Content-Type': 'application/json',
       
      },mode:'cors',
      body: JSON.stringify( {
        nome: nome,
        email: email,
        senha: senha,
      }),
    };
    const response = await fetch('http://localhost:3050/usuarios', cadastro);
    if(response.status === 201){
      setModalOk(true)
      history.push('/')
      
    }
    if(response.status === 400){
      setModalErro(true)
    }
  };  
  const ModalErro = () => {return <p className={styles.cadastroErro}>Erro ao cadastrar usuário!</p>}
  const ModalOk = () => {
    return <p className={styles.cadastroFeito}>Usuário cadastrado com sucesso!</p>
  }
  return (
    <>
    {modalOk && <ModalOk/>}
    {modalErro && <ModalErro/>}
    <div className={styles.caixaTransparente}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="text"
            id="senha"
            name="senha"
            onChange={(event) => setSenha(event.target.value)}
          />
        </div>
        <div className={styles.caixaBotoes}>
          <Link to='/'>
                <button className={styles.voltarLogin} type="submit">Voltar</button>
          </Link>  
          <button type="submit">Cadastrar</button>
        </div>
        
      </form>
    </div>
    </>
  );
};

export default FormCadastro;
