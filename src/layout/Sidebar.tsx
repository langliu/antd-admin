import React, { useContext, useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  TeamOutlined,
  DotChartOutlined,
  AimOutlined,
  PieChartOutlined,
  SafetyOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { ToggleContext } from './index';

const asd = <PieChartOutlined />;

function Sidebar() {
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>(
    JSON.parse(sessionStorage.getItem('defaultSelectedKeys') || `["首页"]`)
  );
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>(
    JSON.parse(sessionStorage.getItem('defaultOpenKeys') || `["首页"]`)
  );
  const navigate = useNavigate();
  const { collapsed } = useContext(ToggleContext);

  useEffect(() => {
    console.log('menu render');
  }, []);

  const menuConfig = [
    {
      title: '首页',
      path: '/dashboard',
      icon: asd,
    },
    // {
    //   title: '设备管理',
    //   icon: <VideoCameraOutlined />,
    //   children: [
    //     {
    //       title: '设备列表',
    //       path: '/devices',
    //     },
    //     {
    //       title: '设备地图',
    //       path: '/devices-map',
    //     },
    //   ],
    // },
    {
      title: '能耗统计',
      icon: <DotChartOutlined />,
      children: [
        {
          title: '能耗概况',
          path: '/energy',
        },
        {
          title: '定额检测',
          path: '/energy/monitor',
        },
      ],
    },
    {
      title: '设备检测',
      icon: <AimOutlined />,
      children: [
        {
          title: '设备检测',
          path: '/device',
        },
        {
          title: '设备地图',
          path: '/device/map',
        },
      ],
    },
    {
      title: '统计分析',
      icon: <BarChartOutlined />,
      children: [
        {
          title: '同环比',
          path: '/analysis',
        },
        {
          title: '多能耗单元分析',
          path: '/analysis/multi',
        },
      ],
    },
    {
      title: '组织管理',
      icon: <TeamOutlined />,
      children: [
        {
          path: '/users',
          title: '用户管理',
        },
        {
          path: '/users/organization',
          title: '能耗单元',
        },
      ],
    },
    {
      title: '权限管理',
      path: 'authority',
      icon: <SafetyOutlined />,
    },
  ];

  const navigateTo = (path?: string) => {
    console.log(`clicked ${path}`);
    if (path) {
      navigate(path);
      // setDefaultSelectedKeys([menuConfig[0].title]);
    }
  };

  const renderMenu = (
    data: {
      title: string;
      children?: any[];
      icon?: JSX.Element;
      path?: string;
    }[]
  ) => {
    const menu = [];
    for (const item of data) {
      if (item.children) {
        menu.push(
          <Menu.SubMenu icon={item.icon} key={item.title} title={item.title}>
            {renderMenu(item.children)}
          </Menu.SubMenu>
        );
      } else {
        menu.push(
          <Menu.Item
            icon={item.icon}
            key={item.title}
            onClick={() => navigateTo(item.path)}
          >
            {item.title}
          </Menu.Item>
        );
      }
    }
    return menu;
  };

  /**
   *
   * @param e
   */
  const onSelect = (e: any) => {
    setDefaultSelectedKeys([e.key]);
    setDefaultOpenKeys(e.keyPath);
    sessionStorage.setItem('defaultSelectedKeys', JSON.stringify([e.key]));
    sessionStorage.setItem('defaultOpenKeys', JSON.stringify(e.keyPath));
    console.log(e);
  };

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="vertical"
        defaultSelectedKeys={defaultSelectedKeys}
        // defaultOpenKeys={defaultOpenKeys}
        onClick={onSelect}
      >
        {renderMenu(menuConfig)}
      </Menu>
    </Layout.Sider>
  );
}

export default Sidebar;
