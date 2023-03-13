import "./CartWidget.scss";

export const CartWidget = () => {
  return (
    <div>
      <img
        src="../cartWidget.png"
        className="cartWidgetClass"
        alt="cartWidget"
      ></img>
      <span style={{ color: "red", position: "absolute", marginLeft: "100px" }}>
        4
      </span>
    </div>
  );
};
