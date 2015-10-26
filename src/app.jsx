var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title:'Choose Framework', // Button Name
  items: ['React', 'Angular', 'Ember', 'Meteor'] // Items to show
};

var element = React.createElement(Dropdown, options);

React.render(element, document.querySelector('.container'));
