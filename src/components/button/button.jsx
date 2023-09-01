import "./button.css";

const Buttons = (props) => {
  return (
    <>
      <button
        className={`btn ${
          (props.type === "add" && "add") ||
          (props.type === "remove" && "remove") ||
          (props.type === "checkbox" && "checkbox")
        }`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.title}
      </button>
    </>
  );
};
export default Buttons;
