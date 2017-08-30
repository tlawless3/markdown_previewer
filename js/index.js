"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Markdown = function (_React$Component) {
  _inherits(Markdown, _React$Component);

  function Markdown(props) {
    _classCallCheck(this, Markdown);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    };

    _this.update = _this.update.bind(_this);
    return _this;
  }

  Markdown.prototype.update = function update(newText) {
    this.setState({
      text: event.target.value
    });
  };

  Markdown.prototype.markUp = function markUp(markdownText) {
    var htmlText = marked(markdownText, { sanitize: true });
    return { __html: htmlText };
  };

  Markdown.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "input" },
        React.createElement("textarea", { rows: "20", type: "text", id: "rawText", value: this.state.text, onChange: this.update, ref: "inputValue" })
      ),
      React.createElement(
        "div",
        { className: "output" },
        React.createElement(
          "p",
          null,
          React.createElement("span", { dangerouslySetInnerHTML: this.markUp(this.state.text) })
        )
      )
    );
  };

  return Markdown;
}(React.Component);

ReactDOM.render(React.createElement(Markdown, null), document.getElementById('root'));