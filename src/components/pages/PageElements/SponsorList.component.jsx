import React from "react";
import { Image, Button } from "antd";
import HotOmhLogo from "../../../assets/sponsors/hot_omh.png";
import GrabLogo from "../../../assets/sponsors/grab.png";
import TomtomLogo from "../../../assets/sponsors/tomtom.png";
import SwuLogo from "../../../assets/sponsors/host/swu.png";
import OsgeoLogo from "../../../assets/sponsors/host/osgeo.png";
import AitLogo from "../../../assets/sponsors/host/ait.jpg";
import ItBizLogo from "../../../assets/sponsors/host/i-bitz.jpg";
import IcimodLogo from "../../../assets/sponsors/icimod.png";

export const SponsorList = () => {

    return (
        <div >
            <div className="sponsor-icon-containrer">
                <div>
                    <Image className="segment-header-image" height={280} preview={false} src={HotOmhLogo}></Image>
                </div>
                <div>
                    <Image className="segment-header-image" height={180} preview={false} src={GrabLogo}></Image>
                </div>
                <div>
                    <Image className="segment-header-image" height={140} preview={false} src={TomtomLogo}></Image>
                </div>
            </div>
            <div>
            <p className="segment-heading">Host of the event</p>
            </div>
            <div className="host-icon-containrer">
                <div>
                    <Image className="segment-header-image" height={100} preview={false} src={SwuLogo}></Image>
                </div>
                <div>
                    <Image className="segment-header-image" height={100} preview={false} src={OsgeoLogo}></Image>
                </div>
                <div>
                    <Image className="segment-header-image" height={100} preview={false} src={AitLogo}></Image>
                </div>
                <div>
                    <Image className="segment-header-image" height={100} preview={false} src={ItBizLogo}></Image>
                </div>
            </div>
            <div>
            <p className="segment-heading">Travel Grant Partner</p>
            </div>
            <div className="sponsor-icon-containrer">
                <div>
                    <Image height={60} preview={false} src={IcimodLogo}></Image>
                </div>
            </div>
        </div>
    );
};
