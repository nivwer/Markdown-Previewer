export const reset = () => {
    let res = document.getElementById("escritura")
    res.value = "cangrejo"
}

export const hiddenE = () => {
    let toggle = document.getElementById("editor")
    toggle.classList.toggle("w-hidden");
}

export const hiddenP = () => {
    let toggle = document.getElementById("preview")
    toggle.classList.toggle("w-hidden");
}

export const hiddenD = () => {
    let toggle = document.getElementById("md-document")
    toggle.classList.toggle("w-hidden");
}

export const fullscreen = () => {
    let add = document.getElementById("editor")
    add.classList.toggle("w-fullscreen");
    add.classList.toggle("w-active");
    let remove = document.getElementById("w-toolbar")
    remove.classList.toggle("w-draggable")
}

export const fullscreens = () => {
    let add = document.getElementById("preview")
    add.classList.toggle("w-fullscreen");
    add.classList.toggle("w-active");
}

export const fullscreenD = () => {
    let add = document.getElementById("md-document")
    add.classList.toggle("w-fullscreen");
    add.classList.toggle("w-active");
}

export const select = () => {
    let select = document.getElementById("preview")
    select.classList.add("w-active");
}

export function Button(props) {
    return (
        <button type="button" id="editor-btn" onClick={props.F} className="btn btn-dark">
            <div>
                <img className={"icon-b icon-" + props.Icon} src={"/icons/bootstrap/" + props.Icon + ".svg"} />
            </div>
        </button>
    )
}