import React, {useState} from "react";
import {BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/bs";

export default function NavGroup(props){

    const [showTable, setSHowTable] = useState(true);
    const [arrow, setArrow] = useState(<BsFillCaretUpFill />)

    const toggle = () => {
        setSHowTable(!showTable);
        if (showTable) {
            setArrow(<BsFillCaretDownFill />)
        } else {
            setArrow(<BsFillCaretUpFill />)
        }
    }

    return (
        <>
        <div className="accordionContainer" onClick={toggle}>
            <button className="accordion">
                {props.label}
                <p>{arrow}</p>
            </button>
        </div>
        {showTable && (
            <>
            {props.children}
            </>
        )
        }
        </>
    )

}