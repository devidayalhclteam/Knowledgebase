import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import AppRoutes from './AppRoutes';
import './App.scss';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {AppRoutes.map((route) => {
            const { element, ...rest } = route;
            return <Route key={route.path} {...rest} element={element} />;
          })}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
