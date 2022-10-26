import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import ProductAll from '../components/ProductAll';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>메인</h1>
        <ProductAll />
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
