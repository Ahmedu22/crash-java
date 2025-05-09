alert(7)

// variables
// keywords = var, let, const

var x = 10
console.log(x)
 
let name = "Ahmed";
let lastname ="Yussuf";
console.log(name + " " + lastname)

const age = "32";
console.log(age)



// Rules

// * contains only letters, numbers, _ , $ sign
// * cannot start with numbers

// naming variables
// 1.camel case
// const firstName = "Mohamed"
// 2.underscore method
// const first-name = "Ahmed"
// 3.pascalcase method
// const LastName = "Ahmed"

// two tpyes of data types
// 1.primitive

// .numbers
// let age = "22";
// console.log(typeof age);

// .strings
// const name = "Ahmed";
// console.log(typeof name)

// .symbol

// .boolean
const isPlaying = false;
console.log(typeof isPlaying);

// .null/undefined
const count = null;
console.log(count)

let car;
console.log(car)

// 2.object

// .Arrays  : index wa godka elemet wa waxa kugudajira
// array litterals []
let list = [4,5,7,8];
list[4] = 'yes'
console.log(list)

// array constructer array()
let numbers = new Array(2,3,4)
numbers[3] = 'ahmed'
console.log(numbers)


// Array.of(), Array.from()

// Array methods

// const numbers = [4,5,7,8];

// add items at the end
numbers.push(99);
// add items on the begening 
numbers.unshift(77);
// remove first item on the list
numbers.shift()
// remove last item on the list
numbers.pop()
//  console.log(numbers)

// .indexOf
const fruits = ['🍉','🍌','🍍'];
// copy/ the spread operator
const newFriuts =[...fruits];
console.log(newFriuts);



// .function

// .objects
// opject literal
let empty = {}
let midPoint = {x: 2, y: 3};
midPoint.p = 7
delete midPoint.p
console.log(midPoint)

// opject info
let info = {
    course: 'java',
    level: 'all levels',
    school: 'zein empower',
    id: '445522',
    duration: "7weeks",
    chapters: {
        section1: 'basic',
        section2: 'intermediate',
        section3: 'advance'
    }, 
   msg: function(){ 
    console.log('Hello')
   },
   studentId: [46,76,3]
}
console.log(info)


// .anthing else which is not primitive
