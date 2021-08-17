import { React, useCallback, useContext } from 'react';
import styles from './CardTarefas.module.css';

import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import MyContext from '../../contexts/MyContext';

export default function CardTarefas(props) {
  const { setData } = useContext(MyContext);
  const deletaTarefa = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:3050/tarefas/${props.id}`,
        {
          method: 'DELETE',
        }
      ).then((res) => res.json());
      if (response.status === 200) {
        const dataTarefa = props.getData();
        setData(dataTarefa);
      }
    } catch (e) {
      alert('Oops, failed posting developer information...');
    }
    props.getData();
  }, [props, setData]);

  return (
    <div className={styles.caixaTransparente}>
      <div>
        <h1>{props.titulo}</h1>
        <h2>{props.status}</h2>
        <p>{props.dataCriacao}</p>
        <p> {props.descricao}</p>
      </div>
      <div className={styles.divIcons}>
        <div className={styles.icons}>
          <AiFillEdit />
        </div>
        <div className={styles.icons}>
          <AiFillDelete onClick={deletaTarefa} />
        </div>
      </div>
    </div>
  );
}
