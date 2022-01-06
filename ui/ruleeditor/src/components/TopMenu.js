import React, { useEffect, useState } from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
export  default function TopMenu(props){

    const [currentMenu, setCurrentMenu] = useState("mail");

    function handleClick(){
        
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[currentMenu]} mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined />}>
            Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
            Navigation Two
            </Menu.Item>
        </Menu>
    )
}