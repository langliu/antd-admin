import React, { Suspense } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

function Content() {
  return (
    <Layout.Content
      style={{
        margin: '24px 16px',
        minHeight: 280,
      }}
    >
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </Layout.Content>
  );
}

export default Content;
