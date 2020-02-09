const Divider = ({ handleMouseDown, left }) => (
  <div
    className="divider"
    onMouseDown={() => handleMouseDown()}
    style={{ left: left + "px" }}
  ></div>
);

export default Divider;
