import React from "react";
import { Divider, Image } from "antd";
import "./DetailsSegment.styles.css";
import { PublishSoon } from "../../PageElements/PublishSoon.components";
import descriptionImage from "../../../../assets/bg-svg/section-icon-about-us.svg";
import SegmentDividerBottom from "../../../../assets/bg-svg/segment-divider-bottom.svg";
import waveBlueBottom from "../../../../assets/bg-svg/bg-footer-wave.svg";

export const DetailsSegment = (props) => {
    const contents = props.detailsContent;
    const thumb = props.thumb;
    const childElement = props.childElement;

    return (
        <div>
            <div className="description-section">
                <div className="description-image-container">
                    {thumb ? (
                        <Image height={160} preview={false} src={thumb}></Image>
                    ) : (
                        <Image height={160} preview={false} src={descriptionImage}></Image>
                    )}
                    {/* <Image height={160} preview={false} src={descriptionImage}></Image> */}
                </div>
                <p className="section-heading">{contents.contentTitle}</p>
                {contents.status ? (
                    <div>
                        <p className="section-content-text">{contents.contentText}</p>
                    </div>
                ) : (
                    <div>{<PublishSoon />}</div>
                )}

                {childElement ? <div>{childElement}</div> : <div></div>}

                {/* <Image className="wave-bottom" preview={false} src={waveBlueBottom}></Image> */}
                <div className="segment-divider" style={{ marginBottom: 0, height: 100, backgroundImage: `url(${SegmentDividerBottom})` }} />
            </div>
        </div>
    );
};
