import React, { useEffect } from "react";
import { List, Typography  } from "antd";
import "../TitleSegment/TitleSegment.styles.css";
import "../DetailsSegment/DetailsSegment.styles.css";
import "./VenueMap.styles.css";

export const SocialEventContent = (props) => {
    const contents = props.contents;

    const CoreList = [
        '15 November 2023',
      ];

      const CommunicationList = [
        '16 Decembr 2023',
      ];

    return (
        <div style={{ backgroundColor: "white" }}>
            <p className="section-content-text">
                <List
                    header={<div style={{fontWeight: 'bold'}}>Walking Tour</div>}
                    bordered
                    dataSource={CoreList}
                    renderItem={(item) => (
                        <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </p>

            <p className="section-content-text">
                <List
                    header={<div style={{fontWeight: 'bold'}}>Gala Night</div>}
                    bordered
                    dataSource={CommunicationList}
                    renderItem={(item) => (
                        <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </p>
        </div>
    );
};
