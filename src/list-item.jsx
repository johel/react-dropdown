var React = require('react');

module.exports = React.createClass({
	render:function(){
		return <li><a href="#">{this.props.option}</a></li> 
	}
})