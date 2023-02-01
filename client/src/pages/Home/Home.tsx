import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import ProductList from '../ProductList/ProductList';
import ProductDetails from '../ProductDetails/ProductDetails';

export default function Home() {
  const [page, setPage] = useState("productList");

  return (
    <React.Fragment>
      <Navbar />
      {page === "productList" && <ProductList />}
      {page === "productDetails" && <ProductDetails />}
    </React.Fragment>
  )
}
