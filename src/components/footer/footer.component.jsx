import React from "react";
import { Divider, Image, Row, Space } from "antd";
import { useNavigate, Link } from "react-router-dom";
import "./footer.styles.css";
import useViewport from "../../hooks/useViewport";
import waveBlueBottom from "../../assets/bg-svg/bg-footer-wave.svg";

export const FooterComponent = () => {
    const { width } = useViewport();
    const breakpoint = 780;
    const onSocialBtnClick = (path) => {
        window.open(path, "_blank", "noopener,noreferrer");
    }

    return (
        <div className="footer-container">
            {width > breakpoint ? (
                <div style={{ display: "flex", flexDirection: "Row", width: "80vw" }}>
                    <div style={{ width: "50%" }}>
                        <p className="footer-segment-header">Program Summary</p>
                        <p className="footer-segment-text">
                            <span style={{ fontSize: 8, paddingRight: 10 }}>
                                <i className="fa-regular fa-calendar-days"></i>
                            </span>
                            16-18 November, 2023
                        </p>
                        <p className="footer-segment-text">
                            <span style={{ fontSize: 8, paddingRight: 10, color: "#b7b7b7" }}>
                                <i className="fa-solid fa-location-dot"></i>
                            </span>
                            Srinakharinwirot University, 114 Soi Sukhumvit 23,
                            <br />
                            Khlong Toei Nuea, Watthana, Bangkok 10110
                        </p>
                        <p className="footer-segment-text">
                            <span style={{ fontSize: 8, paddingRight: 10 }}>
                                <i className="fa-solid fa-phone"></i>
                            </span>
                            <a> Call or Whatsapp us </a>
                        </p>
                    </div>
                    <div style={{ width: "50%" }}>
                        <p className="footer-segment-header" style={{ textAlign: "right" }}>
                            Social Connection
                        </p>
                        <p className="footer-segment-text" style={{ textAlign: "right" }}>
                            Don't miss any updates, join our Social handles
                        </p>

                        <div className="social-icon-containrer" style={{ justifyContent: "flex-end" }}>
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
                                style={{ backgroundColor: "#ffffff" }}
                                onClick={() => onSocialBtnClick("https://github.com/sotm-asia")}
                            >
                                <i className="fa-brands fa-github" style={{ color: "#171515" }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ display: "flex", flexDirection: "Column", width: "80vw" }}>
                    <div>
                        <p className="footer-segment-header" style={{ textAlign: "center" }}>
                            Program Summary
                        </p>
                        <i style={{ fontSize: 20, color: "#b7b7b7" }} className="fa-regular  fa-calendar-days"></i>
                        <p className="footer-segment-text" style={{ textAlign: "center" }}>
                            16-18 November, 2023
                        </p>
                        <i style={{ fontSize: 20, color: "#b7b7b7" }} className="fa-solid fa-location-dot"></i>
                        <p className="footer-segment-text" style={{ textAlign: "center" }}>
                            Srinakharinwirot University, 114 Soi Sukhumvit 23, Khlong Toei Nuea, Watthana, Bangkok 10110
                        </p>
                        <i style={{ fontSize: 20, color: "#b7b7b7" }} className="fa-solid fa-phone"></i>
                        <p className="footer-segment-text" style={{ textAlign: "center" }}>
                            <a> Call or Whatsapp us </a>
                        </p>
                    </div>
                    <div>
                        <p className="footer-segment-header" style={{ textAlign: "center" }}>
                            Social Connection
                        </p>
                        <p className="footer-segment-text" style={{ textAlign: "center" }}>
                            Don't miss any updates, join our Social handles
                        </p>

                        <div className="social-icon-containrer" style={{ justifyContent: "center" }}>
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
                                style={{ backgroundColor: "#ffffff" }}
                                onClick={() => onSocialBtnClick("https://github.com/sotm-asia")}
                            >
                                <i className="fa-brands fa-github" style={{ color: "#171515" }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Divider style={{ minWidth: "80vw", width: "80vw", backgroundColor: "#595959" }} />

            <div>
                <ul class="horizontal-list">
                    <li>
                        <Link to="/credits">Credits</Link>
                    </li>
                    {/* <li>
                        <Link to="/attending/attending-guidelines">Guidelines</Link>
                    </li> */}
                    <li>
                        <Link to="/about/committee">Committee</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            {/* <Divider style={{ minWidth: "60vw", width: "60vw", backgroundColor: "#595959" }} /> */}

            <div>
                <div className="disclaimer-section">
                    This work and its contents is licensed under a{" "}
                    <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                        Creative Commons Attribution-ShareAlike 4.0 International License
                    </a>{" "}
                    <br />
                    Other works (software, source code, etc.) referenced in this website are under their own respective licenses.
                    {/* <p><a href="https://www.freepik.com/free-vector/bangkok-city-detailed-skyline-vector-illustration-thailand_23144328.htm#query=bangkok%20skyscraper&position=0&from_view=search&track=ais">Image by Sky and Glass</a> on Freepik</p> */}
                </div>
            </div>
        </div>
    );
};
