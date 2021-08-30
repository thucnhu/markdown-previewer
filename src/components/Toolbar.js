import React from "react"
import "./Toolbar.css"


export default function Toolbar(props) {
    return (
        <div>
            <i className="fab fa-free-code-camp"></i>
            {props.text}
            <i className={props.icon}></i>
        </div>
    )
}