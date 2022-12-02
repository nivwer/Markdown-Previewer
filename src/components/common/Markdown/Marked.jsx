import { useState } from "react";
import { marked } from "marked"

export function useMarked() {
    const [text, setText] = useState('## asdasdasdfdasd')
    const event = (e) => { setText(e.target.value) }
    const markdown = marked(text)
    marked.setOptions({ breaks: true })

    return [text, { event, markdown }]
}

export function Doc() {
    const document = ('# hola')
    const markdown = marked(document)

    return markdown
}


