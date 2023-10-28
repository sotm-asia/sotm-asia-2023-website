import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ChildMasterPage } from "../pages/ChildPages/ChildMasterPage.component";
import { HomepageComponent } from "../pages/Homepage/homepage.component";
import { ContentTexts } from "../contents/data/content_texts";

import { VenueMap } from "../pages/PageElements/VenueMap.component";
import {Page404} from '../pages/PageElements/Page404.component'
import {CreditsElement} from '../pages/ChildPages/ChildPageElements/CreditsElement.components'

import ic404Thumb from "../../assets/bg-svg/ic-404-thumb.svg";
import { VenueMapPage } from "../pages/ChildPages/ChildPageElements/VenueMapPage.component";
import { SpeakersList } from "../pages/PageElements/SpekersList.component";
import { CodeOfConductContent } from "../pages/ChildPages/ChildPageElements/CodeOfConductContent.component";
import { CommitteeContent } from "../pages/ChildPages/ChildPageElements/CommitteeContent.component";
import { SocialEventContent } from "../pages/ChildPages/ChildPageElements/SocialEventContent.component";
import { SponsorPartnerContent } from "../pages/ChildPages/ChildPageElements/SponsorPartnerContent.component";

export const ContentComponent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomepageComponent />}></Route>
                <Route path="/sotm-asia-2023-website" element={<HomepageComponent />}></Route>
                {/* <Route path="/about" element={<ChildMasterPage />} ></Route> */}
                <Route path="/about/sotm-asia" element={<ChildMasterPage contents={ContentTexts.about.sotmAsia} />}></Route>
                <Route path="/about/sotm-asia-history" element={<ChildMasterPage contents={ContentTexts.about.sotmAsiaHistory} />}></Route>
                <Route path="/about/code-of-conduct" element={<ChildMasterPage contents={ContentTexts.about.codeOfConduct} childElement={<CodeOfConductContent />} />}></Route>
                <Route path="/about/committee" element={<ChildMasterPage contents={ContentTexts.about.committee} childElement={<CommitteeContent />} />}></Route>

                <Route
                    path="/proposals/call-for-proposals"
                    element={<ChildMasterPage contents={ContentTexts.proposals.callProposal} />}
                ></Route>
                <Route
                    path="/proposals/submit-proposal"
                    element={<ChildMasterPage contents={ContentTexts.proposals.submitProposal} />}
                ></Route>

                <Route path="/attending/registration" element={<ChildMasterPage contents={ContentTexts.attending.registration} />}></Route>
                <Route path="/attending/travel-grant" element={<ChildMasterPage contents={ContentTexts.attending.travelGrant} />}></Route>
                <Route
                    path="/attending/studentship-grant"
                    element={<ChildMasterPage contents={ContentTexts.attending.studentshipGrant} />}
                ></Route>
                <Route path="/attending/accomodation" element={<ChildMasterPage contents={ContentTexts.attending.accomodation} />}></Route>
                <Route
                    path="/attending/attending-guidelines"
                    element={<ChildMasterPage contents={ContentTexts.attending.attendingGuidelines} />}
                ></Route>
                <Route path="/attending/visa-info" element={<ChildMasterPage contents={ContentTexts.attending.visaInfo} />}></Route>
                <Route
                    path="/attending/getting-to-bangkok"
                    element={<ChildMasterPage contents={ContentTexts.attending.gettingBangkok} />}
                ></Route>

                <Route path="/attending/venue" element={<ChildMasterPage contents={ContentTexts.attending.venue} childElement={<VenueMap />} />}></Route>
                {/* <Route path="/attending/venue" element={<VenueMapPage contents={ContentTexts.attending.venue} />}></Route> */}

                <Route path="/conference/keynote" element={<ChildMasterPage contents={ContentTexts.conference.keynote} />}></Route>

                <Route
                    path="/conference/speakers"
                    element={<ChildMasterPage contents={ContentTexts.conference.speakers} childElement={<SpeakersList />} />}
                ></Route>
                <Route
                    path="/conference/program-schedule"
                    element={<ChildMasterPage contents={ContentTexts.conference.programSchedule} />}
                ></Route>
                <Route path="/conference/social-events" element={<ChildMasterPage contents={ContentTexts.conference.socialEvents} childElement={<SocialEventContent />} />}></Route>

                <Route
                    path="/sponsors/call-for-sponsors"
                    element={<ChildMasterPage contents={ContentTexts.sponsors.callSponsors} />}
                ></Route>
                <Route
                    path="/sponsors/sponsors-and-partners"
                    element={<ChildMasterPage contents={ContentTexts.sponsors.sponsorsPartners} childElement={<SponsorPartnerContent />} />}
                ></Route>

                <Route path="/news/conference-news" element={<ChildMasterPage contents={ContentTexts.news.confNews} />}></Route>
                <Route path="/news/announcement" element={<ChildMasterPage contents={ContentTexts.news.confAnnounement} />}></Route>
                <Route path="/news/faqs" element={<ChildMasterPage contents={ContentTexts.news.faqs} />}></Route>
                
                <Route path="/credits" element={<ChildMasterPage contents={ContentTexts.footerLinks.credits} childElement={<CreditsElement />} />}></Route>
                <Route path="/contact" element={<ChildMasterPage contents={ContentTexts.footerLinks.contact} />}></Route>

                <Route path="/404" element={<ChildMasterPage contents={ContentTexts.error.routeError}  thumb={ic404Thumb} childElement={<Page404 />}  />}></Route>
                <Route path="*" element={<Navigate to="/404"/>}></Route>
            </Routes>
        </div>
    );
};
