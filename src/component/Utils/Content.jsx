import React from "react"

export default function Content(props) {
    const lists = props.lists;
    const p = props.p;

    return (
        <div className="contents">
            <div className="title">
                <h4>{props.title}</h4>
            </div>
            <div className="body">
                {p && p.map((i)=>{
                    return(
                        <p>{i}</p>
                    )
                })}
                <div className="lists">
                    {lists && <p>{props.listTitle}</p>}
                    {lists && lists.map((i)=>{
                        return(
                            <li>{i}</li>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};