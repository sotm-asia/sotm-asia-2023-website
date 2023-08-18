import React, { useState } from "react";
import { Menu, Layout, Col, Row } from "antd";
import logo from "../../assets/sotm-asia-2023-logo.png";
import MenuItems from "./menu-items";
import "./header.styles.css";
import { useNavigate, Link } from "react-router-dom";
import useViewport from "../../hooks/useViewport";
import { AlignRightOutlined } from "@ant-design/icons";

export const HeaderComponent = () => {
    const [current, setCurrent] = useState("/");
    const navigate = useNavigate();
    const onClick = (e) => {
        setCurrent(e.key);
        navigate(e.key);
    };
    const { width } = useViewport();
    const breakpoint = 780;
    return (
        <Layout style={{ width: "100%" }}>
            <Row
                style={{
                    // backgroundColor: "rgba(37, 34, 82, 1)",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Col
                    span={16}
                    push={8}
                    style={{
                        float: "right",
                    }}
                >
                    <Menu
                        theme="light"
                        onClick={onClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                        overflowedIndicator={<AlignRightOutlined />}
                        items={MenuItems}
                        style={{
                            fontFamily: "'Barlow Semi Condensed', sans-serif",
                            fontWeight: 500,
                            fontSize: "large",
                            backgroundColor: "rgba(0,0,0,0)",
                            display: "flex",
                            justifyContent: "flex-end",
                            height: 100,
                            alignItems: "center",
                        }}
                    />
                </Col>
                <Col
                    span={8}
                    pull={16}
                    style={{
                        backgroundColor: "rgba(0,0,0,0)",
                        display: "flex",
                        alignItems: "center",
                        justifyItems: "center",
                    }}
                >
                    <Link style={{display: "flex", alignItems: "center"}} to="/">
                        <img src={logo} alt="logo" height={80} style={{ marginLeft: 1 }} />
                    </Link>
                    {width > breakpoint ? (
                        <Link to="/">
                            <p className="text-logo">
                                <span className="alternate-logo-color">State of the Map</span>
                                <br />
                                Asia - 2023
                            </p>
                        </Link>
                    ) : (
                        <div></div>
                    )}
                </Col>
            </Row>
        </Layout>
    );
};
