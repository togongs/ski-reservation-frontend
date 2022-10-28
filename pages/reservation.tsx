import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import { IGetProductData } from '../components/Product/ProductAll';

const ProductReservation = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = useCallback(async () => {
    const url = '/data/db.json';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const resData = data.product_list;
    setProductList(resData);
    // dispath(getAllProducts(resData));
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <Header />
      <Container>
        <section>
          {productList.map((product: IGetProductData, index: number) => (
            <Link href={`/reservation/info?pid=${product.id}`} key={index}>
              <a>
                <div key={product.id}>
                  <div>resort: {product.resort_name}</div>
                  <div>prodcut: {product.product_name}</div>
                  <div>description: {product.description}</div>
                  <hr></hr>
                </div>
              </a>
            </Link>
          ))}
        </section>
      </Container>
    </>
  );
};

export default ProductReservation;
