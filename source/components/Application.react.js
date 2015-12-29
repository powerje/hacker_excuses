var React = require('react');
var Excuse = require('./excuse.react');

var reasons = [
  'Working hard',
  'Gotta ship this feature',
  'Someone screwed the system again',
  'The coffee machine exploded',
  'My roller chair requires repair after jousting',
  'Butterflies in the office'
];

var Application = React.createClass({
  getRandomReason: function() {
    var reason = reasons[Math.floor(Math.random() * reasons.length)];
    return "Honey I'm late. " + reason + '.';
  },

  getInitialState: function() {
    return {text: this.getRandomReason()};
  },

  render: function() {
    return (<Excuse text={this.state.text}/>);
  }
})

module.exports = Application
