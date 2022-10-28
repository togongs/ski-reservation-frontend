import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import ProductAll from '../components/Product/ProductAll';
import Modal from '../components/Modal';
import { useState } from 'react';

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <>
      <Header />
      <Container>
        <h1>메인</h1>
        <ProductAll />
        <div>
          {openModal && <Modal closeModal={() => setOpenModal(false)} />}
        </div>
        {/* <Footer /> */}
      </Container>
    </>
  );
};

export default Home;
