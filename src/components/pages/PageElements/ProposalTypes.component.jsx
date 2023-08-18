import { Card } from "antd";
import React from "react";
import './PageElement.styles.css'
import useViewport from '../../../hooks/useViewport'
import icProposalCard1 from "../../../assets/bg-svg/ic_proposal_card_1.svg";
import icProposalCard2 from "../../../assets/bg-svg/ic_proposal_card_2.svg";
import icProposalCard3 from "../../../assets/bg-svg/ic_proposal_card_3.svg";

const { Meta } = Card;

export const ProposalTypes = (props) => {
    const mobileView = {
        display: 'flex', flexDirection: 'column' 
    }
    const desktopView = {
        display: 'flex', flexDirection: 'row' 
    }
    const { width } = useViewport();
    const breakpoint = 780;

    return (
        <div style={{padding: 20}}>
            <div style={width > breakpoint ? desktopView : mobileView}>
                <Card
                    hoverable
                    className="proposal-card"
                    cover={<img className="card-cover-image" alt="example" src={icProposalCard1} />}
                >
                    <Meta className="card-text" title="Presentation" description="25 Minutes" />
                </Card>
                <Card
                    hoverable
                    className="proposal-card"
                    cover={<img className="card-cover-image" alt="example" src={icProposalCard2} />}
                >
                    <Meta className="card-text" title="Workshop" description="2-4 Hours" />
                </Card>
                <Card
                    hoverable
                    className="proposal-card"
                    cover={<img className="card-cover-image" alt="example" src={icProposalCard3} />}
                >
                    <Meta className="card-text" title="Lightning Talk" description="5-10 Minutes" />
                </Card>
            </div>
        </div>
    );
};
