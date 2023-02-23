import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import ProductList from '../ProductList/ProductList';
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductHome from '../ProductHome/ProductHome';
import Footer from '../Footer/Footer';
import HomeSelector from "./HomeSelector";
import { setDisplayView } from "../Home/HomeSlice";
import type { AppDispatch } from "../../store";

export default function Home() {
  const { displayView } = useSelector(HomeSelector);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(setDisplayView("productHome"))
    }
  }, [location.pathname])

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      {displayView === "productHome" && <ProductHome />}
      {displayView === "productList" && <ProductList />}
      {displayView === "productDetails" && <ProductDetails />}
      <Footer />
    </React.Fragment>
  )
}
