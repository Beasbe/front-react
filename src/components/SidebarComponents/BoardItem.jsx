import React, { useState, useEffect } from 'react';
import { FileOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { theme } from '../HeaderComponents/Themes';
import axios from "axios";

const BoardItem = () => {
    const [names, setNames] = useState([])
    const fetchNames = () => {

        axios.get('http://127.0.0.1:8080/api/projects').then(r =>{
            const DefaultInfo = r.data
            const menuItems = [
                {
                    key: 'sub',
                    label: 'Your boards',
                    icon: <FileOutlined />,
                    children: DefaultInfo.map(item => {
                        return {key: item.id, label: item.name}
                    }),
                },
            ]
            setNames(menuItems)
        })
    }
        useEffect(() => {
            fetchNames()
        },[])



    const [current, setCurrent] = useState('1');
    const [menuTheme, setMenuTheme] = useState(theme);

    useEffect(() => {
        setMenuTheme(theme);
    }, [theme]);

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <>
            <Menu
                theme={menuTheme}
                onClick={onClick}
                style={{ width: 170 }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[current]}
                mode="inline"
                items={names}
            />
        </>
    );
};

export default BoardItem;
