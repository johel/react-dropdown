var React = require('react');

module.exports = React.createClass({
	render:function(){
		return <li className={this.props.className} onClick={this.handleClick}><a href="#">{this.props.option}</a></li> 
	},
	handleClick:function(e){
		this.props.handleClick(this.props.option);
	}
})