import React from "react";
import {MdChevronRight} from 'react-icons/md';

export default function BreadCrumbs(props){
    return (
        <div className="breadcrumbs">
            <p>Home <MdChevronRight size={15} /> <span id="catname">{props.catName}</span> </p>
        </div>
    )
}