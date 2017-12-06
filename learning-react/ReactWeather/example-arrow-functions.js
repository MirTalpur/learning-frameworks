var names = ['Andrew', 'Ally', 'Boss'];

// names.forEach(function(name){
// 	console.log('forEach',name);
// });

// names.forEach((name) => {
// 	console.log('arrowFunc',name);
// })

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Boss mac'));

// var person = {
// 	name: 'Andrew',
// 	greet: function (){
// 		names.forEach(function(name){
// 			console.log(this.name + ' say hi to' + name);
// 		});
// 	}
// };

var person = {
	name: 'Andrew',
	greet: function (){
		names.forEach((name) => {
			console.log(this.name + ' say hi to ' + name);
		});
	}
};

person.greet();

var add = (a, b) => a + b;
console.log(add(3,5));
// this can still be refered to the names array