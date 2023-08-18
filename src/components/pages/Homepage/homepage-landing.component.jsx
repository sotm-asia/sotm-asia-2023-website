import React from "react";
import { Button, Image } from "antd";
import "./homepage.styles.css";
import LandingImage from "../../../assets/2023-header-homepage.png";
import { CountdownTimer } from "../../contents/countdown/CountdownTimer";
import waveBlueBottom from "../../../assets/bg-svg/bg-footer-wave.svg";
import PageHeaderWave from "../../../assets/bg-svg/page-header-wave.svg";
import moment from "moment";
import { FacebookFilled, LinkedinFilled, TwitterCircleFilled, GithubFilled } from "@ant-design/icons";

export const HomepageLanding = (props) => {
    const contents = props.contents;
    const programDate = moment("20231116, 10:00:00", "YYYYMMDD, hh:mm:ss").valueOf();

    const onFoss4gClick = () => {
        window.open("https://2023.foss4g.in.th/", "_blank", "noopener,noreferrer");
    };

    const onSocialBtnClick = (path) => {
        window.open(path, "_blank", "noopener,noreferrer");
    };
    return (
        <div className="landing-image" style={{ backgroundImage: `url(${LandingImage})` }}>
            <div className="landing-overlay-gradient" />
            <div className="landing-header-container">
                <div className="landing-header">{contents.header}</div>
                <p className="landing-sub-header">
                    {contents.date}
                    <br />
                    {contents.venue}
                </p>
                <p className="landing-sub-header" style={{ fontSize: 16 }}>
                    {contents.coOrganiser}
                </p>
                <div style={{ paddingBottom: "20px" }}>
                    <Button
                        onClick={onFoss4gClick}
                        shape="round"
                        type="primary"
                        size="large"
                        className="segment-button"
                        style={{ backgroundColor: "rgba(73, 99, 168, 1)" }}
                    >
                        {contents.link}
                    </Button>
                </div>
                <div className="countdown-timer-container">
                    <CountdownTimer targetDate={programDate} style={{ maxWidth: 360 }} />
                </div>

                <p className="landing-sub-header" style={{ fontSize: 16 }}>
                    Find more on
                </p>
                <div className="social-icon-containrer">
                    <div
                        className="footer-social-icon"
                        style={{ backgroundColor: "#4267B2" }}
                        onClick={() => onSocialBtnClick("https://www.facebook.com/SotmAsia/")}
                    >
                        <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div
                        className="footer-social-icon instagram"
                        onClick={() => onSocialBtnClick("https://www.instagram.com/sotm_asia/?hl=en")}
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div
                        className="footer-social-icon"
                        style={{ backgroundColor: "#00acee" }}
                        onClick={() => onSocialBtnClick("https://twitter.com/sotmasia?lang=en")}
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div
                        className="footer-social-icon"
                        style={{ backgroundColor: "#171515" }}
                        onClick={() => onSocialBtnClick("https://github.com/sotm-asia")}
                    >
                        <i className="fa-brands fa-github"></i>
                    </div>
                </div>
            </div>
            <div className="landing-header-wave" style={{ backgroundImage: `url(${PageHeaderWave})` }}></div>
        </div>
    );
};
