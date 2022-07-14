import React from "react";

export default function NavLink(props){
    return (
        <>
            <div className="navlink" onClick={()=>{
                window.location.href = props.url
            }}>
                <span className="link">{props.link}</span>
            </div>
        </>
    )
}
