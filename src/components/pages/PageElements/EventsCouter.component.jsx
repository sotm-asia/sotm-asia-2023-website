import React from "react";

export const EventsCounter = (props) => {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 2000;
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
    return (
        <div className="wrapper">
            <div className="container">
                <i className="fas fa-users"></i>
                <span className="num" data-val="300">
                    300
                </span>
                <span className="text">Attendees</span>
            </div>
            <div className="container">
                <i className="fas fa-chalkboard-user"></i>
                <span className="num" data-val="50">
                    50
                </span>
                <span className="text">Speakers</span>
            </div>
            <div className="container">
                <i className="fas fa-list"></i>
                <span className="num" data-val="25">
                    25
                </span>
                <span className="text">Sessions</span>
            </div>
            <div className="container">
                <i className="fas fa-briefcase"></i>
                <span className="num" data-val="64">
                    64
                </span>
                <span className="text">Workshop</span>
            </div>
        </div>
    );
};
