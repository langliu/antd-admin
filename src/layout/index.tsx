import React, { createContext, useReducer } from 'react';
import { Layout } from 'antd';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

export const ToggleContext = createContext<any>(null);
const reducer = (state: boolean, action: { type: string }) => {
  switch (action.type) {
    case 'TOGGLE':
      return !state;
    default:
      return state;
  }
};

function LayoutWrapper() {
  const [collapsed, dispatch] = useReducer(reducer, false);
  return (
    <ToggleContext.Provider value={{ collapsed, dispatch }}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header />
          <Content />
        </Layout>
      </Layout>
    </ToggleContext.Provider>
  );
}

export default LayoutWrapper;
