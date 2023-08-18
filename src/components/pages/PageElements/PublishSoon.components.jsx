import React from "react";
import './PageElement.styles.css'
import { Image } from "antd";
import publishSoon from '../../../assets/bg-svg/publish-soon.svg'

export const PublishSoon = (props) => {
    return(
        <div className="publish-soon">
            <Image  src={publishSoon} preview={false}/>
        </div>
    )
}