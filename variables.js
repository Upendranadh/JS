//var
/*
 * var is function scoped
 * var can be re declared
 * var is hoisted(gives undefined if we try to access before declaration)
 */
// var a = 10;
// function f() {
//   console.log(a);
// }
// f();
// console.log(a);

function f() {
  var a = 10;
  console.log(a);
}
f();

console.log(a);

/*
! Let variable
*The scope of a let variable is block scope.
*It can be updated but cannot be re-declared into the scope.
 */
