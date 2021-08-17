import React, { useContext, useCallback } from 'react';
import styles from './FormTarefas.module.css';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import MyContext from '../../contexts/MyContext';
export default function FormTarefas(props) {
  const [titulo, setTitulo] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [modalOk, setModalOk] = React.useState(false);
  const [modalErro, setModalErro] = React.useState(false);
  const { id, data, setData } = useContext(MyContext);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const tarefa = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          body: JSON.stringify({
            titulo: titulo,
            status: status,
            descricao: descricao,
            id_usuario: id,
          }),
        };
        const response = await fetch('http://localhost:3050/tarefas', tarefa);
        console.log(response);
        if (response.status === 201) {
          const newTarefas = data.concat([tarefa]);
          setData(newTarefas);
          setModalOk(true);
        }
        if (response.status === 400) {
          throw new Error(setModalErro(true));
        }
      } catch (e) {
        setModalErro(true);
      }
      props.getData();
    },
    [data, descricao, id, props, setData, status, titulo]
  );

  const ModalErro = () => {
    return <p className={styles.cadastroErro}>Erro ao criar tarefa!</p>;
  };
  const ModalOk = () => {
    return <p className={styles.cadastroFeito}>Tarefa criada com sucesso!</p>;
  };
  return (
    <>
      <div className={styles.formTarefas}>
        {modalOk && <ModalOk />}
        {modalErro && <ModalErro />}
        <form onSubmit={handleSubmit} className={styles.caixaTransparente}>
          <Input
            htmlFor="titulo"
            type="text"
            name="Titulo"
            onChange={(event) => setTitulo(event.target.value)}
          />
          <Input
            htmlFor="status"
            type="text"
            name="Status"
            onChange={(event) => setStatus(event.target.value)}
          />
          <Textarea
            htmlFor="descricao"
            name="Descricao"
            onChange={(event) => setDescricao(event.target.value)}
          />
          <Button type="submit" nome="Adicionar" />
        </form>
      </div>
    </>
  );
}
