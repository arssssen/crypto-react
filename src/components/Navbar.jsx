import { BulbOutlined, HomeOutlined, MenuOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { Avatar, Button, Menu, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import icon from '../img/Ethereum-ETH-icon.png'
const { Title } = Typography;
const items = [
  {
    key: 'home',
    icon: <HomeOutlined/>,
    label: <Link to="/">Home</Link>,
  },
  {
    key: 'cryptocurrency',
    icon: <MoneyCollectOutlined/>,
    label:<Link to="/crypto-currencies">Crypto Currencies</Link>
    ,
  },
  {
    key: 'news',
    icon:<BulbOutlined/>,
    label: <Link to="/news">News</Link>
,
  },
 
 
];
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="logo-container">
        <Avatar src={icon}/>
        <Title style={{color:'#fff'}}>
          <Link to='/' >Cryptostock</Link>
        </Title>
      </div>

      
      <Menu
        defaultSelectedKeys={['']}
        mode="inline"
        theme="dark"
        items={items}
      />
        
    </div>
  )
}

export default Navbar