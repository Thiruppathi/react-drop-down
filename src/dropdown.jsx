// We need to show a button and list, based on the click event on the button

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    this.setState({open: !this.state.open}); // always use setState instead of this.state.open
  },
  getInitialState: function() {
    return {open:false};
  },
  handleItemClick: function(item) {
    this.setState({open: false, itemTitle: item});
  },
  render: function() {
    var items = this.props.items.map(function(item) {
        return (
          <ListItem item={item} whenItemClicked={this.handleItemClick} className={this.state.itemTitle === item ? 'active' : ''}/>
        ) ;
      }.bind(this));

    return (
      <div className='dropdown'>
        <Button className='btn-default' title={this.state.itemTitle || this.props.title} subTitleClassName='caret' whenClicked={this.handleClick}/>
        <ul className={'dropdown-menu ' + (this.state.open ? 'show' : '')}>
          {items}
        </ul>
      </div>
    );
  }
});
