import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}>
            <div className="countdown-box " >
                <p className="countdown-text">
                    {value}
                </p>
            </div>

            <span className="countdown-lebel" >
                {type}
            </span>
        </div>
    );
};

export default DateTimeDisplay;
