import React from "react";
import { Row, Col } from "antd";

export const SpeakerSingle = (props) => {
    const speaker = props.speaker
    return (
        <Row className="speaker-single-container">
            <Col span={6}>
                <div className="speaker-image-container" >
                    <img className="speaker-image" alt="example" src={props.speakerImage} />
                </div>
            </Col>
            <Col className="speaker-description-container" span={18}>
                <div className="speaker-description-header">{speaker.name}</div>
                <div className="speaker-description-sub-header">{speaker.speakerType}</div>
                <div className="speaker-description-text">{speaker.topicDetails}</div>
            </Col>
        </Row>
    );
};
