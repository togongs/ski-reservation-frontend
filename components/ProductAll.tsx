import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllProducts, productData } from '../redux/reducers/productReducer';
import { AppDispatch } from '../redux/store';

interface Iitem {
  product: {
    productList: string[];
    isLoading: boolean;
    selectedItem: string | null;
    error: object | null;
  };
}
interface IProductItem {
  id: string;
  product_name: string | null;
  resort_name: string | null;
  description: string | null;
  resort_operation_time: string | null;
}

const ProductAll = () => {
  const dispath = useDispatch<AppDispatch>();
  const { productList, isLoading }: productData = useSelector(
    (state: Iitem) => state.product,
  );
  //   const [productList, setProductList] = useState<any[]>();

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
  // console.log('productList', productList);
  return (
    <section>
      <>
        {console.log('productList', productList)}
        {/* {productList?.map((product: IProductItem, index: any) => (
          <div key={product.id}>
            <div>상품명: {product.product_name}</div>
            <div>리조트명: {product.resort_name}</div>
            <div>설명: {product.description}</div>
            <div>운영시간: {product.resort_operation_time}</div>
            <hr></hr>
          </div>
        ))} */}
      </>
    </section>
  );
};

export default ProductAll;
