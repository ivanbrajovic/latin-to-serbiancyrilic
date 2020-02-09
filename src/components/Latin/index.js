const Latin = ({ width, inputValue }) => (
  <div className="halfside latin" style={{ width }}>
    <span>Latin</span>
    <textarea
      name="latin"
      onInput={event => inputValue(event.target.value)}
      spellCheck="false"
    ></textarea>
  </div>
);

export default Latin;
