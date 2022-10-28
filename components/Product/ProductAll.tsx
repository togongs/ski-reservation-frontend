import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllProducts, IProducts } from '../../redux/reducers/productReducer';
import { AppDispatch } from '../../redux/store';

export interface IProductData {
  product: {
    productList: IGetProductData[];
    isLoading: boolean;
    selectedItem: string | null;
    error: object | null;
  };
}
export interface IGetProductData {
  id: string;
  product_name: string | null;
  resort_name: string | null;
  description: string | null;
  resort_operation_time: string | null;
}

const ProductAll = () => {
  const dispath = useDispatch<AppDispatch>();
  const { productList, isLoading }: IProducts = useSelector(
    (state: IProductData) => state.product,
  );

  const getProducts = useCallback(async () => {
    const url = '/data/db.json';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const productList = data.product_list;
    console.log('productList', productList);
    // setProductList(productList);
    dispath(getAllProducts(productList));
  }, [dispath]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (isLoading) {
    return <h1>로딩중...</h1>;
  }
  {
    console.log('productList', productList);
  }
  return (
    <section>
      <>
        {productList?.map((product: IGetProductData, index: number) => (
          <Link href={`/reservation/info?pid=${product.id}`} key={index}>
            <a>
              <div>상품명: {product.product_name}</div>
              <div>리조트명: {product.resort_name}</div>
              <div>설명: {product.description}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <div>운영시간: {product.resort_operation_time}</div>
              <hr></hr>
            </a>
          </Link>
        ))}
      </>
    </section>
  );
};

export default ProductAll;
