import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import ProductList from '../ProductList/ProductList';
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductHome from '../ProductHome/ProductHome';

export default function Home() {
  const [page, setPage] = useState("productHome");

  return (
    <React.Fragment>
      <Navbar />
      {page === "productHome" && <ProductHome />}
      {page === "productList" && <ProductList />}
      {page === "productDetails" && <ProductDetails />}
    </React.Fragment>
  )
}
