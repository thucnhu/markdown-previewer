import React from "react"
import "./Editor.css"


export default function Editor(props) {
    return (
        <div>
            <textarea 
                name="editor" 
                id="editor" 
                value={props.markdown}
                rows={props.rows}
                onChange={props.onChange}
            />
        </div>
    )
}