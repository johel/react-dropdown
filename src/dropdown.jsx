var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  getInitialState:function(){
    return {
      visible:false
    };
  },
  handleButtonClick:function(){
    this.setState({
      visible:!this.state.visible
    });
  },
  handleItemClick:function(item){
    this.setState({
      title:item,
      visible:false
    });
  },
  render:function(){
    return <div className="dropdown">
    	<Button 
        title={this.state.title || this.props.title} 
        btnClass="btn btn-info" 
        handleClick={this.handleButtonClick}
        subTitleClassName="caret" subTitle=""/>
      <ul className={'dropdown-menu ' + (this.state.visible? 'show' : '') }>
     		{this.renderItens()}
      </ul>
    </div>
  },
  renderItens:function(){
  	return this.props.items.map(function(item){
  		return <ListItem className={item===this.state.title? 'active' : ''} handleClick={this.handleItemClick} option={item} />;
  	}.bind(this))
  }
});
