/** @jsx React.DOM */
var React = require('react');

var OurStory = module.exports = React.createClass({
  render: function() {
    return (
      <div className="Detail">
        <img className="Content-large-image" src="https://scontent-lga3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/12219352_10205322216999523_2989781224031728729_n.jpg?oh=2ce868d093f34a72a5a333752218e4eb&oe=56E30ABC"/>
        <div className="Content padBox">
          <p>Jenna and Jason were married at a beautiful restaurant called Michael''s on the Hill in Stowe, Vermont.
          Jason was very nervous but built up the courage to get down on one knee and ask the girl of his dreams
          to marry him. Luckily she said yes and he was ecstatic. Our waitor at the restaurant was observant
          enough to notice his proposal and brought out some champagne. </p>
        </div>
      </div>
    );
  }
});
