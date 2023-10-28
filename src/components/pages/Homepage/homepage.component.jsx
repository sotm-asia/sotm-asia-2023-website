import React from "react";

import { HomepageLanding } from "./homepage-landing.component"
import { HomepageSegmentLight } from "./homepage-segment-light";
import { HomepageSegmentDark } from "./homepage-segment-dark";
import { ProposalTypes } from "../PageElements/ProposalTypes.component";

import { ContentTexts } from "../../contents/data/content_texts";

import icAboutUs from "../../../assets/bg-svg/section-icon-about-us.svg";
import icPrposal from "../../../assets/bg-svg/section-icon-proposal.svg";
import icSponsor from "../../../assets/bg-svg/section-icon-sponsor.svg";
import icSpeaker from "../../../assets/bg-svg/ic_proposal_card_3.svg";
import icProgramSchedule from "../../../assets/bg-svg/section-icon-program-schedule.svg";
import icNews from "../../../assets/bg-svg/section-icon-news.svg";
import { SpeakersList } from "../PageElements/SpekersList.component";
import { ScheduleTab } from "../PageElements/ScheduleTab.component"
import { EventsCounter } from "../PageElements/EventsCouter.component";
import { VenueMap } from "../PageElements/VenueMap.component";
import { SponsorList } from "../PageElements/SponsorList.component";
import SotmLogo from "../../../assets/sotm-asia-2023-logo.png";

export const HomepageComponent = () => {
    return (
        <div>
            <HomepageLanding contents={ContentTexts.homepage.landing} />

            <HomepageSegmentLight contents={ContentTexts.homepage.about} headerImage={SotmLogo} />
            <HomepageSegmentDark contents={ContentTexts.homepage.proposal} headerImage={icPrposal} elements={<ProposalTypes />} />
            <HomepageSegmentLight contents={ContentTexts.homepage.sponsor} headerImage={icSponsor} elements={<SponsorList />} topDivider={true}/>
            <HomepageSegmentDark contents={ContentTexts.homepage.speaker} headerImage={icSpeaker} elements= {<SpeakersList />} />
            <HomepageSegmentLight contents={ContentTexts.homepage.conference} headerImage={icProgramSchedule} elements={<ScheduleTab />}  topDivider={true} />
            <HomepageSegmentDark contents={ContentTexts.homepage.news} headerImage={icNews} />
            <HomepageSegmentLight contents={ContentTexts.homepage.venue} elements={<VenueMap />}  topDivider={true} />


        </div>
    );
};
