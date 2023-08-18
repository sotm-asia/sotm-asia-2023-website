import React from "react";
import { Carousel, Button, Image } from "antd";
import "./content.styles.css";
import { CountdownTimer } from "../../contents/countdown/CountdownTimer";
import PageHeaderWave from "../../../assets/bg-svg/page-header-wave.svg";

import bgImg from "../../../assets/2023-header-homepage.png";
import moment from "moment";

export const HomepageBannerPanel = () => {
    const programDate = moment("20231116, 10:00:00", "YYYYMMDD, hh:mm:ss").valueOf();

    const onFoss4gClick = () => {
        window.open("https://2023.foss4g.in.th/", "_blank", "noopener,noreferrer");
    };

    return (
        <section
            style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "center",
                flexDirection: "column",
                backgroundPosition: "center",
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                minHeight: 800,
            }}
        >
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
                <p className="main-heading dark-section-text">STATE OF THE MAP ASIA 2023</p>

                <div
                    style={{
                        backgroundColor: "rgba(37, 34, 82, 0.6)",
                        borderRadius: 10,
                        color: "white",
                        textAlign: "center",
                        padding: 20,
                    }}
                >
                    <p className="section-sub-heading dark-section-text">
                        November 16-18, 2023 <br />
                        Bangkok, Thailand
                    </p>

                    <p className="section-content-text dark-section-text">Co-event with FOSS4G Thailand</p>

                    <Button
                        shape="round"
                        type="primary"
                        size="large"
                        onClick={onFoss4gClick}
                        style={{
                            width: "300px",
                            fontWeight: 500,
                            fontSize: "large",
                            textAlign: "center",
                            justifyContent: "center",
                        }}
                        className="section-button"
                    >
                        2023.foss4g.in.th
                    </Button>
                </div>

                <div
                    style={{
                        width: "60%",
                        backgroundColor: "rgba(0,0,0,0.8)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 10,
                        color: "white",
                        textAlign: "center",
                        paddingTop: 0,
                        marginTop: 20,
                        minWidth: 360,
                        maxWidth: 600,
                    }}
                >
                    <CountdownTimer targetDate={programDate}  style={{maxWidth: 360}}/>
                </div>

            </div>

            <div 
                className="header-wave" 
                style={{ 
                    backgroundImage: `url(${PageHeaderWave})`,
                     
                }}>
            </div>

        </section>
    );
};
