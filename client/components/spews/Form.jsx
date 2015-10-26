var React = require('react');

module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var content = this.refs.content.getDOMNode().value.trim();
    if (!content) {return;}
    if (this.props.signedIn) {
      this.props.writeSpewToAPI(JSON.stringify({spew: {content: content}}));
      this.refs.content.getDOMNode().value = '';
      this.refs.content.getDOMNode().blur();
    } else {
      alert('please sign up to spew!');
    }
  },
  render: function() {
    return (
      <form className="spews-form pure-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="spew here..." ref="content" />
        <button type="submit" className="pure-button pure-button-primary">spew</button>
      </form>
    );
  }
});
