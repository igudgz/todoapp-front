import React from 'react';
import Footer from '../components/Footer/Footer';
import FormLogin from '../components/FormLogin/FormLogin';
import Header from '../components/Header/Header';

const Login = () => {
  return (
    <>
      <Header />
      <section>
        <FormLogin />
      </section>
      <Footer />
    </>
  );
};

export default Login;
