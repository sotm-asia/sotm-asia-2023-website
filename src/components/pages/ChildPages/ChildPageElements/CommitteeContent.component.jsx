import React, { useEffect } from "react";
import { List, Typography  } from "antd";
import "../TitleSegment/TitleSegment.styles.css";
import "../DetailsSegment/DetailsSegment.styles.css";
import "./VenueMap.styles.css";

export const CommitteeContent = (props) => {
    const contents = props.contents;

    const CoreList = [
        'Arnalie Vicario, 🇵🇭 Philippines',
        'Feye Andal, 🇵🇭 Philippines',
        'Jikka Defiño, 🇵🇭 Philippines',
        'Mark Aimon Pangan, 🇵🇭 Philippines',
        'Ark Arjun, 🇮🇳 India',
        'Honey Fombuena, Open Mapping Hub - Asia Pacific',
        'Mikko Tamura, Open Mapping Hub - Asia Pacific',
        'Laxmi Goparaju,  🇮🇳 India',
        'Anuradha Rajanayake, 🇱🇰 Sri Lanka',
        'Mishari Muqbil, 🇹🇭 Thailand',
      ];

      const CommunicationList = [
        'Fitzken John Victor Garcia III 🇵🇭 Philippines',
        'Aaron Paul Lolor 🇵🇭 Philippines',
        'Md. Azizul Alam Toton 🇧🇩 Bangladesh',
      ];

      const ProramReviewList = [
        'Feye Andal 🇵🇭 Philippines',
        'Leonil Llagas 🇵🇭 Philippines',
        'Marifer Patricio 🇵🇭 Philippines',
      ];

      const VenueSelectionList = [
        'Tasauf A Baki Billah (Ribin), 🇧🇩 Bangladesh',
        'Sawan Shariar, 🇧🇩 Bangladesh',
        'Ark Arjun, 🇮🇳 India',
        'Laxmi, 🇮🇳 India',
        'Irvan, 🇮🇩 Indonesia',
        'Yantisa Akhadi, 🇮🇩 Indonesia',
        'Taichi Furuhashi, 🇯🇵 Japan',
        'Erdenetsogt Sumiyasuren, 🇲🇳 Mongolia',
        'Nama Budhathoki, 🇳🇵 Nepal',
        'Honey Fombuena, 🇵🇭 Philippines',
        'Mark Aimon Pangan, 🇵🇭 Philippines',
        'Hwang Dongha, 🇰🇷 South Korea',
        'Anuradha Rajanayake, 🇱🇰 Sri Lanka',
        'Suthakaran Sudaralingam, 🇱🇰 Sri Lanka',
        'Mishari Muqbil, 🇹🇭 Thailand',
        'Prasong Patheepphoemphong, 🇹🇭 Thailand',
        'Dennis Raylin Chen, 🇹🇼 Taiwan',
        'Can Ünen, 🇹🇷 Türkiye',
      ];

    return (
        <div style={{ backgroundColor: "white" }}>
            <p className="section-content-text">
                <List
                    header={<div>CORE</div>}
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
                    header={<div>Communications (Social Media & Website)</div>}
                    bordered
                    dataSource={CommunicationList}
                    renderItem={(item) => (
                        <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </p>

            <p className="section-content-text">
                <List
                    header={<div>Programs and Review Committee</div>}
                    bordered
                    dataSource={ProramReviewList}
                    renderItem={(item) => (
                        <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </p>

            <p className="section-content-text">
                <List
                    header={<div>Venue Selection Review Committee</div>}
                    bordered
                    dataSource={VenueSelectionList}
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
