import React from "react"
import "./Preview.css"


export default function Preview(props) {
    return (
        <div 
            dangerouslySetInnerHTML={{
                __html: marked(props.markdown, {renderer: props.renderer}),
            }} 
            id="preview"
        >
        </div>
    )
}