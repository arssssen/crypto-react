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
import { Link, useLocation } from "react-router-dom";
import icon from "../img/Ethereum-ETH-icon.png";
const { Title } = Typography;
const items = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: "cryptocurrency",
    icon: <MoneyCollectOutlined />,
    label: <Link to="/crypto-currencies">Crypto Currencies</Link>,
  },
  {
    key: "news",
    icon: <BulbOutlined />,
    label: <Link to="/news">News</Link>,
  },
];

const Navbar = () => {
  return (
    <div>
      <Flex align="center" gap={10} className="logo-container">
        <Avatar src={icon} />
        <Title level={3} style={{ color: "#fff" }}>
          <Link to="/">Cryptostock</Link>
        </Title>
      </Flex>
      <Menu
        defaultSelectedKeys={"home"}
        mode="inline"
        theme="dark"
        items={items}
        className="nav-menu"
      />
    </div>
  );
};

export default Navbar;
