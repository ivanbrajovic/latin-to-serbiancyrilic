const Cyrilic = ({ width, text }) => (
  <div className="halfside cyrilic" style={{ width }}>
    <span>{"Ћирилица (Serbian Cyrilic)"}</span>
    <div className="textarea" tabIndex={0}>
      {text}
    </div>
  </div>
);

export default Cyrilic;
