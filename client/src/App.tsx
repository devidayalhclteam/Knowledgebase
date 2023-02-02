import React, { Suspense, PureComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import AppRoutes from './AppRoutes';
import './App.scss';

export default class App extends PureComponent {
  render() {
    return (
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {AppRoutes.map((route) => {
              const { element, ...rest } = route;
              return <Route key={route.path} {...rest} element={element} />;
            })}
          </Routes>
        </Suspense>
      </Layout>
    );
  }
}
