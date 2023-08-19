import React, { useEffect } from "react";
import { Divider, Image } from "antd";
import "../TitleSegment/TitleSegment.styles.css";
import "../DetailsSegment/DetailsSegment.styles.css";
import "./VenueMap.styles.css";
import TitleImage from "../../../../assets/2023-header-pages.jpg";
import waveBlueBottom from "../../../../assets/bg-svg/bg-footer-wave.svg";
import PageHeaderWave from "../../../../assets/bg-svg/page-header-wave.svg";

import { PublishSoon } from "../../PageElements/PublishSoon.components";
import descriptionImage from "../../../../assets/bg-svg/section-icon-about-us.svg";
import SegmentDividerBottom from "../../../../assets/bg-svg/segment-divider-bottom.svg";

export const VenueMapPage = (props) => {
    const contents = props.contents;

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll, {
    //         passive: true,
    //     });

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <div style={{ backgroundColor: "white" }}>
            <div className="title-image" style={{ backgroundImage: `url(${TitleImage})` }}>
                <div className="image-overlay-gradient" />
                <div className="header-wave" style={{ backgroundImage: `url(${PageHeaderWave})` }}></div>
            </div>

            <div className="venue-map-container">
                <div className="map-info-pane">map-info-pane</div>
                <div className="map-container">map-container</div>
            </div>

            <div className="segment-divider" style={{ marginBottom: 0, height: 100, backgroundImage: `url(${SegmentDividerBottom})` }} />
        </div>
    );
};
