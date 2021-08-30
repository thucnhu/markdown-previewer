import React from "react"
import "./Toolbar.css"


export default function Toolbar(props) {
    return (
        <div className="toolbar">
            <i className="fab fa-free-code-camp fa-lg"></i>
            {props.text}
            <i className={props.icon} onClick={props.onClick}></i>
        </div>
    )
}