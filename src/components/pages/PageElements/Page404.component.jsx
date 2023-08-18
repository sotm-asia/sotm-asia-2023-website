import React from "react";
import './PageElement.styles.css'
import { Image } from "antd";
import ic404 from '../../../assets/bg-svg/ic-404-page.svg'

export const Page404 = (props) => {
    return(
        <div className="page-404-img">
            <Image height={300}  src={ic404} preview={false}/>
        </div>
    )
}