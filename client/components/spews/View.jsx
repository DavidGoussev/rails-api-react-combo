var React = require('react');
var SpewsList = require('./List.jsx');

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
  render: function() {
    return (
      <div className="spews-view">
        <h1>textual spew</h1>
        <SpewsList data={this.state.data} />
      </div>
    );
  }
});
