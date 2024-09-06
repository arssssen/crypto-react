import {
  BulbOutlined,
  HomeOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  ConfigProvider,
  Flex,
  Menu,
  Row,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import icon from "../img/Ethereum-ETH-icon.png";
const { Title } = Typography;
const items = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: <NavLink to="/">Home</NavLink>,
  },
  {
    key: "cryptocurrency",
    icon: <MoneyCollectOutlined />,
    label: <NavLink to="/crypto-currencies">Crypto Currencies</NavLink>,
  },
  {
    key: "news",
    icon: <BulbOutlined />,
    label: <NavLink to="/news">News</NavLink>,
  },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [selectedKeys, setSelectedKeys] = useState([]);
  useEffect(() => {
    setSelectedKeys(currentPath);
    switch (currentPath) {
      case "/":
        setSelectedKeys(["home"]);
        break;
      case "/crypto-currencies":
        setSelectedKeys(["cryptocurrency"]);
        break;
      case "/news":
        setSelectedKeys(["news"]);
        break;
      default:
        setSelectedKeys([]);
    }
  }, [currentPath]);
  return (
    <div>
      <Flex align="center" gap={10} className="logo-container">
        <Avatar src={icon} />
        <Title level={3} style={{ color: "#fff" }}>
          <Link to="/">Cryptostock</Link>
        </Title>
      </Flex>
      <Menu
        selectedKeys={selectedKeys}
        mode="inline"
        theme="dark"
        items={items}
        className="nav-menu"
      />
    </div>
  );
};

export default Navbar;
