/*React stuff */
class Quote extends React.Component {
  // const currentQuote = getQuote();
  // console.log(currentQuote);
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "" };
    //Initialize state here.
  }
  componentDidMount() {
    fetch("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?").
    then(res => res.json()).
    then(
    result => {
      this.setState({
        quote: result.quoteText,
        author: result.quote });

    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    error => {
      this.setState({
        quote: "None",
        author: "None",
        error });

    });

  }

  // const quoteGen= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box", class: "container" }, /*#__PURE__*/
      React.createElement("p", { id: "text" }, this.state.quote), /*#__PURE__*/
      React.createElement("p", { id: "author" }, this.state.author), /*#__PURE__*/
      React.createElement("button", { id: "new-quote" }, "New Quote"), /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet" })));


  }}
;
ReactDOM.render( /*#__PURE__*/React.createElement(Quote, null), document.getElementById('page'));