import React, { useState } from 'react';
import { Menu, Row } from 'antd';
import { HomeOutlined, BookOutlined, TransactionOutlined, UsergroupAddOutlined, ShopOutlined, ShoppingCartOutlined } from '@ant-design/icons'
const Navbar = () =>  {
    const [current, setCurrent ] = useState('home')
    function handleClick(e) {
        console.log('click ', e);
        setCurrent( e.key );
      };
        return <Row justify="start">
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{paddingLeft: '20px'}}>
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    Home
                </Menu.Item>
                <Menu.Item key="book" icon={<BookOutlined />}>
                    Books
                </Menu.Item>
                <Menu.Item key="user" icon={<UsergroupAddOutlined />}>
                    Users
                </Menu.Item>
                <Menu.Item key="transaction" icon={<TransactionOutlined />}>
                    Transactions
                </Menu.Item>
                <Menu.Item key="myShop" icon={<ShopOutlined />}>
                    My Shop
                </Menu.Item>
                <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
                </Menu.Item>
            </Menu>
        </Row>
    }
export default Navbar;