import React from "react";
import { DetailsSegment } from "./DetailsSegment/DetailsSegment.components";
import { TitleSegment } from "./TitleSegment/TitleSegment.component";

export const ChildMasterPage = props => {
    const contents = props.contents
    const thumb = props.thumb
    const childElement = props.childElement

    return (
        <div>
            <TitleSegment titleContents={contents} />
            <DetailsSegment detailsContent={contents} thumb={thumb} childElement={childElement}/>
        </div>
    )
}