import React from 'react';
import Content from './Content';
import Header from './Header';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-full border-r border-l mx-auto lg:w-3/4 md:w-4/5 sm:w-5/6 w-full">
      <Header />
      <Content>
        {children}
      </Content>
    </div>
  );
}

export default Layout;
