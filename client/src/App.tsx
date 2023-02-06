import React, { Suspense, PureComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import AppRoutes from './AppRoutes';
import './App.scss';

type RouteItem = {
  index?: boolean;
  path: string;
  element: React.ReactNode;
};

export default class App extends PureComponent {
  render() {
    return (
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {AppRoutes.map((route: RouteItem) => {
              const { element, ...rest } = route;
              return <Route key={route.path} {...rest} element={element} />;
            })}
          </Routes>
        </Suspense>
      </Layout>
    );
  }
}
