var React = require('react');
var SpewsList = require('./List.jsx');
var SpewsForm = require('./Form.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.readSpewsFromAPI();
  },
  readSpewsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/spews', function(spews) {
      this.setState({data: spews});
    }.bind(this));
  },
  writeSpewToAPI: function(data) {
    this.props.writeToAPI('post', this.props.origin + '/spews', data, function(spew) {
      var spews = this.state.data;
      spews.unshift(spew);
      this.setState({data: spews});
    }.bind(this));
  },
  render: function() {
    return (
      <div className="spews-view">
        <h1>#textualspew</h1>
        <SpewsForm writeSpewToAPI={this.writeSpewToAPI} signedIn={this.props.signedIn} />
        <SpewsList data={this.state.data} />
      </div>
    );
  }
});
