export default function Icon(props) {
    return (
      <div>
        <img className="icon" src={"/icons/bootstrap/" + props.Icon + ".svg"} />
      </div>
    );
}