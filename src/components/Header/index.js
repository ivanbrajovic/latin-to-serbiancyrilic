const Header = ({ handleClick }) => (
  <div className="header">
    <span className="change" onClick={() => handleClick()}>
      <span>
        <svg width="30" height="30">
          <line x1="15" y1="5" x2="25" y2="15" stroke="lightblue" />
          <line x1="15" y1="25" x2="25" y2="15" stroke="lightblue" />
          <line x1="10" y1="5" x2="20" y2="15" stroke="lightblue" />
          <line x1="10" y1="25" x2="20" y2="15" stroke="lightblue" />
        </svg>
      </span>
    </span>
    <span>convert (претвори)</span>
  </div>
);

export default Header;
