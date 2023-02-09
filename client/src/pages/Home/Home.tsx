import React, { useState } from 'react'
import ProductList from '../ProductList/ProductList';
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductHome from '../ProductHome/ProductHome';

export default function Home() {
  const [page, setPage] = useState("productHome");

  return (
    <React.Fragment>
      {page === "productHome" && <ProductHome />}
      {page === "productList" && <ProductList />}
      {page === "productDetails" && <ProductDetails />}
    </React.Fragment>
  )
}
