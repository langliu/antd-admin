import React, { useContext } from 'react';
import { Layout, Avatar, Dropdown, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { ToggleContext } from './index';

function Header() {
  const { collapsed, dispatch } = useContext(ToggleContext);
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={logout}>退出登录</Menu.Item>
    </Menu>
  );
  return (
    <Layout.Header style={{ padding: 0 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          padding: '0 24px',
        }}
      >
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            onClick: () => dispatch({ type: 'TOGGLE' }),
            style: {
              color: 'white',
              fontSize: 24,
            },
          }
        )}
        <Dropdown overlay={menu}>
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Layout.Header>
  );
}

export default Header;
