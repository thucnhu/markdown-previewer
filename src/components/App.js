import React, { useState } from "react"
import Prism from "prismjs"
import "./App.css"
import { Preview, Editor, Toolbar } from "./"


marked.setOptions({
    breaks: true, 
    highlight: () => Prism.highlightAll()
})
const renderer = new marked.Renderer()
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`


export default function App() {
    const [markdown, setMarkdown] = useState(placeholder)
    const [editorMaximized, setEditorMaximized] = useState(false)
    const [previewMaximized, setPreviewMaximized] = useState(false)

    const classes = editorMaximized 
        ? ['editor-maximized', 'preview-hide', 'fas fa-compress-alt']
        : previewMaximized
        ? ['editor-hide', 'preview-maximized', 'fas fa-compress-alt']
        : ['editor-wrap', 'preview-wrap', 'fas fa-expand-arrows-alt']

    function handleChange(event) {
        setMarkdown(event.target.value)
    }

    function handleMaximizeEditor() {
        setEditorMaximized(!editorMaximized)
    }

    function handleMaximizePreviewer() {
        setPreviewMaximized(!previewMaximized)
    }

    return (
        <div>
            <div className={classes[0]}>
                <Toolbar 
                    icon={classes[2]}
                    onClick={handleMaximizeEditor}
                    text="Editor"
                />
                <Editor markdown={markdown} onChange={handleChange} />
            </div>

            <div className={classes[1]}>
                <Toolbar 
                    icon={classes[2]}
                    onClick={handleMaximizePreviewer}
                    text="Previewer"
                />
                <Preview markdown={markdown} renderer={renderer} />
            </div>
        </div>
    )
}