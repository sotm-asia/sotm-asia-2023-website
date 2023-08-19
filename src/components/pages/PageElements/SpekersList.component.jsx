import { Card } from "antd";
import React from "react";
import './PageElement.styles.css'
import useViewport from '../../../hooks/useViewport'
import speakerOne from "../../../assets/speakers/nama.jpg";
import speakerTwo from "../../../assets/speakers/taichi.jpg";
import speakerThree from "../../../assets/speakers/mikko.jpg";

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
                    cover={<img className="card-cover-image" alt="example" src={speakerOne} />}
                >
                    <Meta className="card-text" title="Nama Raj Budhathoki" description="Presentation" />
                </Card>
                <Card
                    className="proposal-card"
                    cover={<img className="card-cover-image" alt="example" src={speakerTwo} />}
                >
                    <Meta className="card-text" title="Taichi Furuhashi" description="Lightning Talk" />
                </Card>
                <Card
                    className="proposal-card"
                    cover={<img className="card-cover-image" alt="example" src={speakerThree} />}
                >
                    <Meta className="card-text" title="Mikko Tamura" description="Workshop" />
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
