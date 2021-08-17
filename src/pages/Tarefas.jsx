import { React, useContext, useEffect, useCallback } from 'react';
import CardTarefas from '../components/CardTarefas/CardTarefas';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MyContext from '../contexts/MyContext';
import styles from '../components/FormLogin/Form.module.css';
import FormTarefas from '../components/FormTarefas/FormTarefas';
export default function Tarefas() {
  const { id, data, setData } = useContext(MyContext);

  const getData = useCallback(async () => {
    try {
      const result = await fetch(
        `http://localhost:3050/usuarios/tarefas/${id}`
      );
      const body = await result.json();
      setData(body.result);
    } catch (err) {
      // error handling code
      console.log(err);
    }
  }, [setData, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Header />
      <section className={styles.containerTarefas}>
        <div className={styles.divTarefas}>
          {data &&
            data.map((item, index) => (
              <CardTarefas
                getData={getData}
                id={item.ID}
                titulo={item.TITULO}
                key={index}
                status={item.STATUS}
                dataCriacao={item.DATACRIACAO}
                descricao={item.DESCRICAO}
              />
            ))}
        </div>
        <FormTarefas getData={getData} />
      </section>
      <Footer />
    </>
  );
}
