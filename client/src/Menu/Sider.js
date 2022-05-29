import {
    AppstoreOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuUnfoldOutlined,
    UserOutlined
  } from '@ant-design/icons';
  import { Button, Menu } from 'antd';
  import { useState } from 'react';
  
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  
  const items = [
    getItem('Авторизація', '1', <PieChartOutlined />),
    getItem('Контакти', '2', <DesktopOutlined />),
    getItem('Категорії', '3', <ContainerOutlined />),
    getItem('Користувач', 'sub1', <UserOutlined />, [
        // getItem('Tom', '3'),
        // getItem('Bill', '4'),
        // getItem('Alex', '5'),
      ]),
    getItem('Навігація', 'sub1', <MailOutlined />, [
      getItem('Головна', '5'),
      getItem('Про сайт', '6'),
      getItem('API', '7'),
    //   getItem('Option 8', '8'),
    ]),
    // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    //     getItem('Option 9', '9'),
    //     getItem('Option 10', '10'),
    //     getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    //   ]),
  ];
  
  const App = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <div
        style={{
          width: 256,
          marginRight:"20px",
        }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{
            height:"70%",
          }}
        />
      </div>
    );
  };
  
  export default App;