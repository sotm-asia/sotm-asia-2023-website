import React from "react";
import { useCountdown } from "../../../hooks/useCountDown";
import DateTimeDisplay from "./DateTimeDisplay";
import "./countdown.styles.css";
import { Layout, Row, Col } from "antd";

export const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
    }
};

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter" >
            <Layout style={{backgroundColor: 'rgba(0,0,0,0)'}}>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <DateTimeDisplay value={days} type={"Days"} isDanger={false} />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <DateTimeDisplay value={minutes} type={"Minutes"} isDanger={false} />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
                    </Col>
                </Row>
            </Layout>

            {/* <DateTimeDisplay value={days} type={"Days"} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} /> */}
        </div>
    );
};
