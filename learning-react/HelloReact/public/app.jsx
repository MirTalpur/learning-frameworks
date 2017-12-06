var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Ali';
var message = 'Passing in message prop';
ReactDOM.render(
    <Greeter name={firstName} message={message}/>,
    document.getElementById('app')
);