

export const hiddenE = () => {
    let toggle = document.getElementById("editor")
    toggle.classList.toggle("hidden");
}

export const hiddenP = () => {
    let toggle = document.getElementById("preview")
    toggle.classList.toggle("hidden");
}

export const fullscreen = () => {
    let add = document.getElementById("editor")
    add.classList.toggle("w-fullscreen");
    let remove = document.getElementById("w-toolbar")
    remove.classList.toggle("w-draggable")
}

export const fullscreens = () => {
    let add = document.getElementById("preview")
    add.classList.toggle("w-fullscreen");
}

export function Button(props) {
    return (
        <button type="button" id="editor-btn" onClick={props.F} className="btn btn-dark">
            <div>
                <img className={"icon icon-" + props.Icon} src={"/icons/bootstrap/" + props.Icon + ".svg"} />
            </div>
        </button>
    )
}