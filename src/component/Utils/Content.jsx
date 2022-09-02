import React from "react"

export default function Content(props) {
    return (
        <div className="content">
            <div className="title">
                <h4>{props.title}</h4>
            </div>
            <div className="body">
                <p>{props.p1}</p>
                <p>{props.p2}</p>
                <p>{props.p3}</p>
                <p>{props.p3}</p>
                <p>{props.p4}</p>
                <div className="lists">
                    <p>{props.listTitle}</p>
                    <ul>
                        <li>{props.l1}</li>
                        <li>{props.l2}</li>
                        <li>{props.l3}</li>
                        <li>{props.l4}</li>
                        <li>{props.l5}</li>
                        <li>{props.l6}</li>
                        <li>{props.l7}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};