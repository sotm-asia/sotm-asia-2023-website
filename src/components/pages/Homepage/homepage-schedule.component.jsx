import React from "react";
import { Tabs, } from "antd";
import "./content.styles.css";
import { TabContent } from '../../contents/elements/tab-content'

import icProgramSchedule from "../../../assets/bg-svg/section-icon-program-schedule.svg";
import spacerBlueTop from "../../../assets/bg-svg/bg-blue-top.svg";
import spacerBlueBottom from "../../../assets/bg-svg/bg-blue-bottom.svg";

export const HomepageSchedulePanel = () => {
    const items = [
        {
          key: '1',
          label: `DAY ONE - November 16`,
          children: <TabContent />,
        },
        {
          key: '2',
          label: `DAY TWO - November 17`,
          children: <TabContent />,
        },
        {
          key: '3',
          label: `DAY THREE - November 18`,
          children: <TabContent />,
        },
      ];

    const onChange = (key) => {
        console.log(key);
      };

    return (
        <section
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                width: "100%",
            }}
        >
            <div
                style={{
                    width: "100%",
                }}
            >
                <img
                    style={{
                        width: "100%",
                    }}
                    src={spacerBlueTop}
                    alt="Your SVG"
                />
            </div>

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
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        style={{
                            height: 160,
                        }}
                        src={icProgramSchedule}
                        alt="Your SVG"
                    />
                </div>
                <p className="section-heading">Program Schedule</p>
                <p className="section-content-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>

                <Tabs 
                    defaultActiveKey="1" 
                    size="large"
                    type="card"
                    tabBarStyle={{ 
                        width: "100%",
                        textAlign: 'center'
                    }}
                    items={items} 
                    onChange={onChange} 
                    className="schedule-tab"
                />
                
            </div>

            <div
                style={{
                    width: "100%",
                    marginBottom: "-5px",
                }}
            >
                <img
                    style={{
                        width: "100%",
                    }}
                    src={spacerBlueBottom}
                    alt="Your SVG"
                />
            </div>
        </section>
    );
};
