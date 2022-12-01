import styles from "./markdown.css";
import Draggable from 'react-draggable';
import { Button, hiddenE, hiddenP, fullscreen, fullscreens } from '../Buttons';
import { useMarked } from "./Marked";



export function Markedown() {
    const [text, { event, markdown }] = useMarked();

    return (
        <>
            <Draggable
                handle=".w-draggable"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[1, 1]}
                scale={1}
                id="draggable">
                <div id="editor" className="editor">
                    <div id="w-toolbar" className="toolbar bg-dark w-draggable">
                        <div className="w-header">
                            <span>Editor</span>
                        </div>
                        <div className="buttons">
                            <Button F={fullscreen} Icon={"fullscreen"} />
                            <Button F={hiddenE} Icon={"close-ig"} />
                        </div>
                    </div>
                    <textarea id="escritura" onChange={event} value={text}></textarea>
                </div>
            </Draggable>
            
            <div id="preview" className="preview">
                <div className="toolbar bg-dark">
                    <div className="w-header">
                        <span>Preview</span>
                    </div>
                    <div className="buttons">
                        <Button F={fullscreens} Icon={"fullscreen"} />
                        <Button F={hiddenP} Icon={"close-ig"} />
                    </div>
                </div>
                <div id="preview" className="content" dangerouslySetInnerHTML={{ __html: markdown }}></div>
            </div>
        </>
    )
}