var names = ['Akhil', 'Nikhil', 'Ramu'];
//
// names.forEach(function (name) {
//     console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('ArrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var person = {
//   name:'This World',
//   greet: function() {
//     names.forEach((name) => console.log(this.name + ' says Hi to ' + name));
//   }
// };
// person.greet();

var add = (a,b) => {
  return a+b;
}
console.log(add(3,4));

var addAgain = (a,b) => console.log(a+b);

addAgain(5,6);
