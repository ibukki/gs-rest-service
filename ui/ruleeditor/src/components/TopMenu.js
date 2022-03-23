import React, { useEffect, useState } from 'react'
import { Menu,Button,Divider } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { addBox } from '../redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

export  default function TopMenu(props){

    const [currentMenu, setCurrentMenu] = useState("mail");
    const dispatch = useDispatch();

    function handleClick(){
        
    };

    return (
        <div>
            <Menu onClick={handleClick} selectedKeys={[currentMenu]} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                Navigation Two
                </Menu.Item>
            </Menu>
            <Button type="primary" style={{marginTop:'10px', marginLeft:'10px'}} onClick={handleClick}>Add Block</Button>
            <Divider />
        </div>
    )
}