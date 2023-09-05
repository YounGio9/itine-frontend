import React from 'react';
import Header from './Header';
import Footer from './Footer';

const isAdmin = (pathname) => pathname.startsWith('/admin');

const Layout = ({ children }) => {
  const currentPath = window.location.pathname;

  const isHeaderVisible = !isAdmin(currentPath);
  const isFooterVisible = !isAdmin(currentPath);

  return (
    <div>
      {isHeaderVisible && <Header />}
      {children}
      {isFooterVisible && <Footer />}
    </div>
  );
};

export default Layout;
