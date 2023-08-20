import { Card } from "antd";
import React from "react";
import "./PageElement.styles.css";
import useViewport from "../../../hooks/useViewport";
import speakerOne from "../../../assets/speakers/nama.jpg";
import speakerTwo from "../../../assets/speakers/taichi.jpg";
import speakerThree from "../../../assets/speakers/mikko.jpg";

import { ContentSpeaker } from "../../contents/data/content_speaker";
import { SpeakerSingle } from "./SpeakerSingle.component";

const { Meta } = Card;

export const SpeakersList = (props) => {
    const mobileView = {
        display: "flex",
        flexDirection: "column",
    };
    const desktopView = {
        display: "flex",
        flexDirection: "row",
    };
    const { width } = useViewport();
    const breakpoint = 780;

    return (
        <div className="speaker-container">
            <SpeakerSingle speaker={ContentSpeaker.nama} speakerImage={speakerOne} />

            <SpeakerSingle speaker={ContentSpeaker.taichi} speakerImage={speakerTwo} />

            <SpeakerSingle speaker={ContentSpeaker.mikko} speakerImage={speakerThree} />
        </div>
    );
};
