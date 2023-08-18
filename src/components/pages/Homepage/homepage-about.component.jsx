import React from "react";
import { Button } from "antd";
import "./content.styles.css";
import spacerBlueTop from "../../../assets/bg-svg/bg-blue-top.svg";
import icAboutUs from "../../../assets/bg-svg/section-icon-about-us.svg";

export const HomepageAboutPanel = () => {
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
            <div className="section-divider">
                <img src={spacerBlueTop} alt="Your SVG" />
            </div>

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
                            height: 240,
                        }}
                        src={icAboutUs}
                        alt="Your SVG"
                    />
                </div>

                <p className="section-heading">State of the Map Asia</p>
                <p className="section-content-text">
                    State of the Map Asia 2023 conference, along with FOSS4G Thailand, will be held at the Srinakharinwirot University -
                    Asoke Area in the vibrant city of Bangkok, Thailand on November 16-18, 2023. This premier event aims to bring together
                    geospatial experts, GIS enthusiasts, developers, humanitarian workers, and policymakers from across Asia to share
                    knowledge, insights, and experiences related to OpenStreetMap (OSM) and the broader open mapping community.
                </p>
                <Button shape="round" type="primary" size="large" className="section-button">
                    Sponsorship Prospectus
                </Button>
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
                    src={spacerBlueBottom}
                    alt="Your SVG"
                />
            </div> */}
        </section>
    );
};
