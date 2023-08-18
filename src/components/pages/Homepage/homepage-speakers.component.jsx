import React from "react";
import { Row, Col, Card } from "antd";
import "./content.styles.css";

import icSpeaker from "../../../assets/bg-svg/section-icon-speaker.svg";
import spacerThemeTop from "../../../assets/bg-svg/bg-theme-top.svg";
import spacerThemeBottom from "../../../assets/bg-svg/bg-theme-bottom.svg";

const { Meta } = Card;

export const HomepageSpeakersPanel = () => {
    return (
        <section
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundPosition: "center",
                // backgroundColor: "white",
                backgroundColor: "#000810",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
            }}
        >
            {/* <div
                style={{
                    width: "100%",
                }}
            >
                <img
                    style={{
                        width: "100%",
                    }}
                    src={spacerThemeTop}
                    alt="Your SVG"
                />
            </div> */}

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    top: "80px",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    padding: 20,
                    // backgroundColor: 'lightcoral',
                }}
            >
                {/* <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        style={{
                            height: 160,
                        }}
                        src={icSpeaker}
                        alt="Your SVG"
                    />
                </div> */}

                <p className="section-heading dark-section-text">Speakers</p>
                <p className="section-content-text dark-section-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s Lorem Ipsum
                </p>
                <Row gutter={16} style={{padding: 30, overflow: "hidden"}}>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ 
                                display: "flex",
                                flexDirection: "column",
                                width: 240,
                                justifyContent: "center",
                                alignItems: "center", }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: 240,
                                justifyContent: "center",
                                alignItems: "center", }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ 
                                display: "flex",
                                flexDirection: "column",
                                width: 240,
                                justifyContent: "center",
                                alignItems: "center", }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                </Row>
            </div>

            
            {/* <div
                style={{
                    width: "100%",
                    marginBottom: "-5px",
                }}
            >
                <img
                    style={{
                        width: "100%",
                    }}
                    src={spacerThemeBottom}
                    alt="Your SVG"
                />
            </div> */}
        </section>
    );
};
