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
import styled from 'styled-components';

const MainBox = styled.div`
  padding-top: 40px;
`;

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <>
      <Header />
      <Container>
        <MainBox>
          <ProductAll />
        </MainBox>
        <div>
          {openModal && <Modal closeModal={() => setOpenModal(false)} />}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
