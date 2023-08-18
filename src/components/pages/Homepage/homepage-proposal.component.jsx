import React from "react";
import { Button, Col, Row, Card } from "antd";
import "./content.styles.css";

import bgImgTopo from "../../../assets/2023-bg-topo.png";
import icProposalCard1 from "../../../assets/bg-svg/ic_proposal_card_1.svg";
import icProposalCard2 from "../../../assets/bg-svg/ic_proposal_card_2.svg";
import icProposalCard3 from "../../../assets/bg-svg/ic_proposal_card_3.svg";

const { Meta } = Card;

export const HomepageProposalPanel = () => {
    const onProposalBtnClick = () => {
        window.open("https://2023.foss4g.in.th/presentation/", "_blank", "noopener,noreferrer");
    };

    return (
        <section
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundPosition: "center",
                backgroundImage: `url(${bgImgTopo})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
            }}
        >
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
                <p className="section-heading dark-section-text">Call for Proposals</p>
                <p className="section-content-text dark-section-text">
                    We are now accepting proposals for the FOSS4G Thailand and State of the Map Asia 2023.If you have
                    something to share in geospatial technology, cartography, community building, or any other related field, we encourage
                    you to submit your proposals and be a part of this enriching event. <br />
                    Should you have any questions or require further information please contact us at <br />
                    <a href="stateofthemapasia@gmail.com">stateofthemapasia@gmail.com</a>
                </p>

                <Row gutter={16} style={{padding: 30, overflow: "hidden"}}>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: 240,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            cover={<img style={{ height: 160, padding: 10 }} alt="example" src={icProposalCard1} />}
                        >
                            <Meta style={{ textAlign: "center" }} title="PRESENTATION" description="25 Minutes" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: 240,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            cover={<img style={{ height: 160, padding: 10 }} alt="example" src={icProposalCard2} />}
                        >
                            <Meta style={{ textAlign: "center" }} title="WORKSHOPS" description="2-4 Hours" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: 240,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            cover={<img style={{ height: 160, padding: 10 }} alt="example" src={icProposalCard3} />}
                        >
                            <Meta style={{ textAlign: "center" }} title="LIGHTNING TALKS" description="5-10 Minutes" />
                        </Card>
                    </Col>
                </Row>

                <Button shape="round" type="primary" size="large" className="section-button" onClick={onProposalBtnClick}>
                    Submit Your Proposal
                </Button>
            </div>
        </section>
    );
};
