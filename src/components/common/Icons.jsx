export default function Icon({ Icon }) {
    return (
      <div>
        <img className="icon" src={"/icons/bootstrap/" + Icon + ".svg"} />
      </div>
    );
}