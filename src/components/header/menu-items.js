import React from "react";
import { 
    HomeOutlined, 
    InfoCircleOutlined, 
    QuestionCircleOutlined, 
    AlignCenterOutlined,
    TeamOutlined,
    AppstoreOutlined,
    UnorderedListOutlined,
    SnippetsOutlined
} from "@ant-design/icons";

const MenuItems = [
    {
        label: "Home",
        key: "/sotm-asia-2023-website",
        icon: <HomeOutlined />,
    },
    {
        label: "About",
        key: "/about",
        icon: <InfoCircleOutlined />,
        children: [
            {
                label: "SoTM Asia",
                key: "/about/sotm-asia",
            },
            {
                label: "SoTM Asia History",
                key: "/about/sotm-asia-history",
            },
            {
                label: "Code of Conduct",
                key: "/about/code-of-conduct",
            },
            {
                label: "Committee",
                key: "/about/committee",
            },
        ],
    },
    {
        label: "Proposals",
        key: "/proposals",
        icon: <UnorderedListOutlined />,
        children: [
            {
                label: "Call for Proposals",
                key: "/proposals/call-for-proposals",
            },
            {
                label: "Submit Proposal"
                // (
                //     <a href="https://conference.foss4g.in.th/2023/submit/ynAMwv/info/" target="_blank" rel="noopener noreferrer">
                //       Submit Proposal
                //     </a>
                //   )
                  ,
                key: "/proposals/submit-proposal",
            },
        ],
    },
    {
        label: "Attending",
        key: "attending",
        icon: <TeamOutlined />,
        children: [
            {
                label: "Registration",
                key: "/attending/registration",
            },
            {
                label: "Travel Grant",
                key: "/attending/travel-grant",
            },
            {
                label: "Studentship Grant",
                key: "/attending/studentship-grant",
            },
            {
                label: "Accomodation",
                key: "/attending/accomodation",
            },
            {
                label: "Attending Guidelines",
                key: "/attending/attending-guidelines",
            },
            {
                label: "Visa Info",
                key: "/attending/visa-info",
            },
            {
                label: "Getting to Bangkok",
                key: "/attending/getting-to-bangkok",
            },
            {
                label: "Venue",
                key: "/attending/venue",
            },
        ],
    },
    {
        label: "Conference",
        key: "conference",
        icon: <AlignCenterOutlined />,
        children: [
            {
                label: "Keynote",
                key: "/conference/keynote",
            },
            {
                label: "Speakers",
                key: "/conference/speakers",
            },
            {
                label: "Program Schedule",
                key: "/conference/program-schedule",
            },
            {
                label: "Social Events",
                key: "/conference/social-events",
            },
        ],
    },
    {
        label: "Sponsors",
        key: "sponsors",
        icon: <AppstoreOutlined />,
        children: [
            {
                label: "Call for Sponsors",
                key: "/sponsors/call-for-sponsors",
            },
            {
                label: "Sponsors and Partners",
                key: "/sponsors/sponsors-and-partners",
            },
        ],
    },
    {
        label: "News",
        key: "news",
        icon: <SnippetsOutlined />,
        children: [
            {
                label: "Conference News",
                key: "/news/conference-news",
            },
            {
                label: "Announcement",
                key: "/news/announcement",
            },
            {
                label: "FAQs",
                key: "/news/faqs",
            },
        ],
    },
];

export default MenuItems;
