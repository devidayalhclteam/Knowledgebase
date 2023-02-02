import React, { ReactNode } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="wrapper">
      {false && <LoadingSpinner />}
      <div className="mainContainer">{children}</div>
    </div>
  )
}
