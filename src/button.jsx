var React = require('react');

module.exports = React.createClass({
	render:function(){
    return <button onClick={this.props.handleClick} className={this.props.btnClass} type="button">
      {this.props.title}
      <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
    </button>
	}	
});