var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  getInitialState:function(){
    return {
      visible:false
    };
  },
  handleClick:function(){
    console.log('visible', !this.state.visible);
    this.setState({
      visible:!this.state.visible
    });
  },
  render:function(){
    return <div className="dropdown">
    	<Button title={this.state.title || this.props.title} btnClass="btn btn-info" handleClick={this.handleClick} />
      <ul className={'dropdown-menu ' + (this.state.visible? 'show' : '') }>
     		{this.renderItens()}
      </ul>
    </div>
  },
  renderItens:function(){
  	return this.props.items.map(function(item){
  		return <ListItem option={item} />;
  	})
  }
});
