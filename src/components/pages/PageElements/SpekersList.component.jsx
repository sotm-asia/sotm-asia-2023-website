import { Card } from "antd";
import React from "react";
import './PageElement.styles.css'
import useViewport from '../../../hooks/useViewport'
import icProposalCard1 from "../../../assets/bg-svg/ic_proposal_card_1.svg";
import icProposalCard2 from "../../../assets/bg-svg/ic_proposal_card_2.svg";
import icProposalCard3 from "../../../assets/bg-svg/ic_proposal_card_3.svg";

const { Meta } = Card;

export const SpeakersList = (props) => {
    const mobileView = {
        display: 'flex', flexDirection: 'column' 
    }
    const desktopView = {
        display: 'flex', flexDirection: 'row' 
    }
    const { width } = useViewport();
    const breakpoint = 780;

    return (
        <div  style={{padding: 20}}>
            <div style={width > breakpoint ? desktopView : mobileView}>
                <Card
                    className="proposal-card"
                    cover={<img className="card-cover-image" alt="example" src='https://picsum.photos/600/500' />}
                >
                    <Meta className="card-text" title="Nama Budhataki" description="Presentation" />
                </Card>
                <Card
                    className="proposal-card"
                    cover={<img className="card-cover-image" alt="example" src='https://picsum.photos/700/600' />}
                >
                    <Meta className="card-text" title="Taichi Furuhashi" description="Presentation" />
                </Card>
                <Card
                    className="proposal-card"
                    cover={<img className="card-cover-image" alt="example" src='https://picsum.photos/500/400' />}
                >
                    <Meta className="card-text" title="Md. Azizul Alam" description="Workshop" />
                </Card>
            </div>
        </div>
    );
};

                {/* <div>
                    <Image height={200} preview={false} src="https://picsum.photos/600/500"></Image>
                </div>
                <div>
                    <Image height={200} preview={false} src="https://picsum.photos/700/600"></Image>
                </div>
                <div>
                    <Image height={200} preview={false} src="https://picsum.photos/500/400"></Image>
                </div>
                <div>
                    <Image height={200} preview={false} src="https://picsum.photos/600/500"></Image>
                </div>
                <div>
                    <Image height={200} preview={false} src="https://picsum.photos/700/600"></Image>
                </div>
                <div>
                    <Image height={200} preview={false} src="https://picsum.photos/500/400"></Image>
                </div> */}
