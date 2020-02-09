import { Component } from "preact";
import Latin from "./Latin";
import Cyrilic from "./Cyrilic";
import Header from "./Header";
import Divider from "./Divider";
import convert from "../convert";

const dividerBoundary = div =>
  div > window.innerWidth - 260
    ? window.innerWidth - 260
    : div < 200
    ? 200
    : div;
const resizearea = () =>
  window.innerWidth > 768 ? window.innerWidth / 2 - 30 : window.innerWidth - 60;
class App extends Component {
  state = {
    dividerLeft: resizearea(),
    text: ""
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.mousemove, false);
    window.addEventListener("mouseup", this.mouseup, false);
    window.addEventListener("resize", this.resize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.mousemove);
    window.removeEventListener("mouseup", this.mouseup);
    window.removeEventListener("resize", this.resize);
  }

  resize = () => this.setState({ dividerLeft: resizearea() });

  mousemove = event =>
    this.state.dividerClicked &&
    this.setState({ dividerLeft: dividerBoundary(event.clientX - 30) });

  mouseup = () => this.setState({ dividerClicked: false });

  hadnleInvert = () => this.setState({ cyrilic: convert(this.state.text) });

  dividerMouseDown = () => this.setState({ dividerClicked: true });

  handleInput = text => this.setState({ text });

  render() {
    const { dividerLeft, cyrilic } = this.state;
    return (
      <div id="app">
        <div className="area">
          {/* Header */}
          <Header handleClick={this.hadnleInvert} />
          {/* text area left */}
          <div className="app-content">
            {/* latin */}
            <Latin width={dividerLeft} inputValue={this.handleInput} />

            {/* divider */}
            <Divider
              handleMouseDown={this.dividerMouseDown}
              left={dividerLeft}
            />
            {/* cyrilic */}
            <Cyrilic
              width={
                window.innerWidth -
                60 -
                (window.innerWidth > 768 ? dividerLeft : 0)
              }
              text={cyrilic}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
