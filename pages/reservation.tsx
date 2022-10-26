import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import Header from '../components/Header';
import { IGetProductData } from '../components/ProductAll';

const Reservation = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = useCallback(async () => {
    const url = '/data/db.json';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const productList = data.product_list;
    setProductList(productList);
    // dispath(getAllProducts(productList));
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <Header />
      <section>
        {productList.map((product: IGetProductData, index: any) => (
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
    </>
  );
};

export default Reservation;
