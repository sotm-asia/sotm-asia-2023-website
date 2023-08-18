import React from "react";
import "./homepage.styles.css";
import { Image, Button } from "antd";
import { useNavigate } from "react-router-dom";
import SegmentDividerBottom from "../../../assets/bg-svg/segment-divider-bottom.svg";
import SegmentDividerTop from "../../../assets/bg-svg/segment-divider-top.svg";

export const HomepageSegmentLight = (props) => {
    const contents = props.contents;
    let navigate = useNavigate();
    const onBtnClick = (path) => {
        if (path.includes('http')) {
            window.open(path, "_blank", "noopener,noreferrer")
        } else {
            navigate(path)
        }
    }
    return (
        <section className="homepage-segment">
            {props.topDivider ? (
                <div className="segment-divider" style={{ marginBottom: 0, height: 100, backgroundImage: `url(${SegmentDividerTop})` }} />
            ) : (
                <div></div>
            )}

            <div>
                {props.headerImage ? (
                    <div className="segment-header-image-container">
                        <Image className="segment-header-image" height={200} preview={false} src={props.headerImage}></Image>
                    </div>
                ) : (
                    <div></div>
                )}

                {contents.header ? <p className="segment-heading">{contents.header}</p> : <div></div>}

                {contents.contentText ? <p className="segment-content-text">{contents.contentText}</p> : <div></div>}
            </div>
            {contents.email ? (
                <div>
                    <a href={contents.email}>{contents.email}</a>
                </div>
            ) : (
                <div></div>
            )}
            {props.elements ? <div>{props.elements}</div> : <div></div>}
            {contents.buttonText ? (
                <div style={{ padding: 40 }}>
                    <Button shape="round" type="primary" size="large" className="segment-button" onClick={() => onBtnClick(contents.link)}>
                        {contents.buttonText}
                    </Button>
                </div>
            ) : (
                <div></div>
            )}
            <div className="segment-divider" style={{ marginBottom: 0, height: 100, backgroundImage: `url(${SegmentDividerBottom})` }} />
        </section>
    );
};

// style={{ backgroundImage: `url(${bgContourLight})` }}
// {props.elements ? <div style={{maxWidth:600, minWidth: 360}}>{props.elements}</div> : <div></div>}
