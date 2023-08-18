import React from "react";
import { List } from "antd";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

export const TabContent = (props) => (
    <div style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 20,
        }}>
        <List
            size="large"
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
        />
    </div>
);
