import React, { ReactNode } from 'react';
import Navbar from '../../pages/Navbar/Navbar';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="wrapper">
      {false && <LoadingSpinner />}
      <Navbar />
      <div className="mainContainer">{children}</div>
    </div>
  )
}
