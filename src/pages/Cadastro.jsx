import React from 'react';
import Footer from '../components/Footer/Footer';
import FormCadastro from '../components/FormCadastro/FormCadastro';
import Header from '../components/Header/Header';

const Cadastro = () => {
  return (
    <>
      <Header />
      <section>
        <FormCadastro />
      </section>
      <Footer />
    </>
  );
};

export default Cadastro;
