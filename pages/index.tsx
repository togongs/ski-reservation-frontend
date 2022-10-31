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
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import asdsa from '../public/assets/img/img1.png';
import ass1 from '../public/assets/img/img2.png';
import ass2 from '../public/assets/img/img3.png';
import Slider from 'react-slick';
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
