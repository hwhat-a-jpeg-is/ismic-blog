import React from 'react';
import { Header, Footer } from '@/components';

export const metadata = {
  title: 'ISM Investment Club',
  description: 'Best investment student club in LTU',
}

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
export default Layout;
