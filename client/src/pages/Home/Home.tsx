import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Navbar from '../Navbar/Navbar';
import ProductList from '../ProductList/ProductList';
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductHome from '../ProductHome/ProductHome';
import HomeSelector from "./HomeSelector";
import type {  AppDispatch } from "../../store";

export default function Home() {
  const { displayView } = useSelector(HomeSelector);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <React.Fragment>
      <Navbar />
      {displayView === "productHome" && <ProductHome />}
      {displayView === "productList" && <ProductList />}
      {displayView === "productDetails" && <ProductDetails />}
    </React.Fragment>
  )
}
