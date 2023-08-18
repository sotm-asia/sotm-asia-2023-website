import React from "react";
import { Divider, Image } from "antd";
import "./TitleSegment.styles.css";
import TitleImage from "../../../../assets/2023-header-pages.jpg";
import waveBlueBottom from "../../../../assets/bg-svg/bg-footer-wave.svg";
import PageHeaderWave from "../../../../assets/bg-svg/page-header-wave.svg";

export const TitleSegment = (props) => {
    const contents = props.titleContents;
    return (
        <div className="title-image" style={{ backgroundImage: `url(${TitleImage})` }}>
            <div className="image-overlay-gradient">
                <div className="title-header-container">
                    <div className="title-header">{contents.header}</div>
                    <div className="title-sub-header">{contents.subHeader}</div>
                </div>
            </div>
            <div className="header-wave" style={{ backgroundImage: `url(${PageHeaderWave})` }}>

            </div>
        </div>
    );
};

