import styles from "./md-document.css"
import { Button, fullscreenD, hiddenD } from "../buttons"
import Icon from "../icons"
import { Doc } from "../markdown/marked"


export function Document() {
    const markdown = Doc()
    return (
        <div id="md-document" className="md-document w-fullscreen w-hidden window">
            <div className="toolbar">
                <div className="w-header">
                    <Icon Icon={"info"} />
                    <span>Marked Document</span>
                </div>
                <div className="buttons">
                    <Button F={fullscreenD} Icon={"fullscreen"} />
                    <Button F={hiddenD} Icon={"close-ig"} />
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
        </div>
    )
}