var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return(
//       <h3>About component</h3>
//     )
//   }
// });

var About = (props) => {
	return(
		<div>
			<h1 className="text-center">About component</h1>
			<p>This is a weather app build on React!</p>
			<p>Here are some of the tools I used:</p>
			<ul>
				<li>
					<a href = "https://facebook.github.io/react">React</a> - This is the React JS Frameworks used
				</li>
				<li>
					<a href = "https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map for the API
				</li>
			</ul>
		</div>
	)
};

module.exports = About;