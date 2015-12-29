var React = require('react');

var style = {
  fontSize: '120px',
  fontWeight: '300',
  display: 'inline-block',
  margin: '20px 10px',
};

var Excuse = React.createClass({
  render: function() {
    return (
      <h2 style={style}>{this.props.text}</h2>
    );
  },
})

module.exports = Excuse
