import React, { useState, useEffect } from "react";
import { Layout, theme } from "antd";
import "./App.css";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContentComponent } from "./components/contents/Router.component";

const { Header, Content, Footer } = Layout;

const App = () => {
    // const [isBottom, setIsBottom] = useState(false);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // const handleScroll = () => {
    //     const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

    //     if (bottom) {
    //         setIsBottom(true);
    //     } else {
    //         setIsBottom(false);
    //     }
    // };
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll, {
    //         passive: true,
    //     });

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    // const footerSticky = {
    //     position: "fixed",
    //     bottom: 0,
    // };

    return (
        <Layout className="layout">
            <Header className="header-custom">
                <HeaderComponent />
            </Header>
            <Content>
                <ContentComponent />
            </Content>
            <Footer className="footer-custom">
                <FooterComponent />
            </Footer>
            {/* {isBottom ? (
                <Footer style={footerSticky} className="footer-custom">
                    <FooterComponent />
                </Footer>
            ) : (
                <Footer className="footer-custom">
                    <FooterComponent />
                </Footer>
            )} */}
        </Layout>
    );
};
export default App;
