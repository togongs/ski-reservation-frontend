import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import Main from '../components/Main';

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <>
      <Header />
      <Container>
        <Main />
        {/* <div>
          {openModal && <Modal closeModal={() => setOpenModal(false)} />}
        </div> */}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
