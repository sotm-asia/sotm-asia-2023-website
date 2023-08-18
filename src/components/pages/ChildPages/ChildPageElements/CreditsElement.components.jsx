import React from "react";
import './ChildElement.styles.css'

export const CreditsElement = (props) => {
    return (
        <div className="credit-container">
            <div className="credit-header">
                Website Element Credits
            </div>
            <div className="credit-text">
                <a href="https://storyset.com/communication">Communication illustrations by Storyset</a>
            </div>
            <div className="credit-text">
                <a href="https://www.freepik.com/free-vector/bangkok-city-detailed-skyline-vector-illustration-thailand_23144328.htm#query=bangkok%20skyscraper&position=1&from_view=search&track=ais">
                    Image by Sky and Glass
                </a>{" "} on Freepik
            </div>
        </div>
    );
};
