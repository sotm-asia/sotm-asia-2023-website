import React from "react";
import { Carousel, Button, Image } from "antd";
import "./content.styles.css";

import icSponsor from "../../../assets/bg-svg/section-icon-sponsor.svg";
import spacerBlueTop from "../../../assets/bg-svg/bg-blue-top.svg";
import spacerBlueBottom from "../../../assets/bg-svg/bg-blue-bottom.svg";

export const HomepageSponsorsPanel = () => {
    return (
        <section
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
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
                    src={spacerBlueTop}
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
                <div
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
                        src={icSponsor}
                        alt="Your SVG"
                    />
                </div>
                <p className="section-heading">Sponsors</p>
                <p className="section-content-text">
                    State of the Map Asia and FOSS4G Thailand are looking for sponsors! If you would like to help us make these co-events a
                    success, please check out the sponsorship prospectus below:
                </p>
                <Button shape="round" type="primary" size="large" className="section-button">
                    Sponsorship Prospectus
                </Button>
            </div>

            <div
                style={{
                    width: "100%",
                    marginBottom: "-5px",
                }}
            >
                <img
                    style={{
                        width: "100%",
                    }}
                    src={spacerBlueBottom}
                    alt="Your SVG"
                />
            </div>
        </section>
    );
};
