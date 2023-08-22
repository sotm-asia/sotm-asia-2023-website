import React from "react";
import { Row, Col } from "antd";
import useViewport from "../../../hooks/useViewport";

export const SpeakerSingle = (props) => {
    const speaker = props.speaker;
    const textAlignCenter = {
        textAlign: "center",
    };

    const textAlignLeft = {
        textAlign: "left",
    };
    const { width } = useViewport();
    const breakpoint = 780;
    return (
        <div className={width > breakpoint ? "speaker-single-container" : "speaker-single-container-mobile"}>
            <div>
                <div className={width > breakpoint ? "speaker-image-container" : "speaker-image-container-mobile"}>
                    <img
                        className="speaker-image"
                        // style={width > breakpoint ? desktopView : mobileView}
                        alt="example"
                        src={props.speakerImage}
                    />
                </div>
            </div>
            <div className="speaker-description-container">
                <div className="speaker-description-header" 
                    style={width > breakpoint ? textAlignLeft : textAlignCenter}>
                    {speaker.name}
                </div>
                <div className="speaker-description-sub-header" 
                    style={width > breakpoint ? textAlignLeft : textAlignCenter}>
                    {speaker.speakerType}
                </div>
                <div className="speaker-description-text" 
                    style={width > breakpoint ? textAlignLeft : textAlignCenter}>
                    {speaker.topicDetails}
                </div>
            </div>
        </div>
    );
};
