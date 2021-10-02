class Break extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5 };

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }
  decrement() {
    if (this.state.break != 0) {
      this.setState(state => ({
        break: state.break - 1 }));

    } else {
      this.setState({
        break: 0 });

    }
  }
  increment() {
    this.setState(state => ({
      break: state.break + 1 }));

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "break-label" }, " Break", /*#__PURE__*/
      React.createElement("button", { id: "break-decrement", onClick: this.decrement }), /*#__PURE__*/
      React.createElement("div", { id: "break-length" }, this.state.break), /*#__PURE__*/
      React.createElement("button", { id: "break-increment", onClick: this.increment })));


  }}

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 25 };

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }
  decrement() {
    if (this.state.session != 0) {
      this.setState(state => ({
        session: state.session - 1 }));

    } else {
      this.setState({
        session: 0 });

    }
  }
  increment() {
    this.setState(state => ({
      session: state.session + 1 }));

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "session-label" }, " Session", /*#__PURE__*/
      React.createElement("button", { id: "session-decrement", onClick: this.decrement }), /*#__PURE__*/
      React.createElement("div", { id: "session-length" }, this.state.session), /*#__PURE__*/
      React.createElement("button", { id: "session-increment", onClick: this.increment })));


  }}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "buttons" }, /*#__PURE__*/
      React.createElement(Break, null), /*#__PURE__*/
      React.createElement(Session, null)));


  }}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeMin: 25,
      timeSec: 0 };
    //Initialize state here.
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "col-labels" }, /*#__PURE__*/
      React.createElement("div", { id: "timer-label" }, " Timer", /*#__PURE__*/
      React.createElement("div", { id: "time-left" }), /*#__PURE__*/
      React.createElement("button", { id: "start-stop" }), /*#__PURE__*/
      React.createElement("button", { id: "reset" }))));



  }}

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "Pomodoro Timer"), /*#__PURE__*/
      React.createElement(Buttons, null), /*#__PURE__*/
      React.createElement(Timer, null)));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(Pomodoro, null), document.getElementById('clock-container'));