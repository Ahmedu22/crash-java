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
function hello(){
    console.log('Assalamu calaikum');
}
hello();

function area (a,b){
    return a * b;
}
console.log(area(5,5))

// a and b are called parameter
// this actual value 5,5 are called argument

// 2.function experation
const calcula = function(a,b){
    return a *b;
}
console.log(calcula(7,7));

// function scope
function agee(){
    console.log('this is function');
}
agee();
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

// condationals
// 1. if and else statement
let v = 7;
if(v==7){
console.log('yes')
}
else{
    console.log("no")
}

let userInput = prompt('write a number')
if(userInput >=7){
    console.log('that a a large number')
}
else if(userInput <=7){
    console.log("that's small numaber")
}
else{
    console.log('no')
}


// 2. switch
//  let day = 'saturday'
//  switch(day){
//     case 'saturday':
//         console.log('its saturady');
//         break;

//     case 'sunday':
//         console.log('its sunday');
//         break;

//     default:
//         console.log('not invalid');
//  }

let date = new Date();
let day = date.getMonth();

switch(day){
    case 1:
        console.log('its monday');
        break;

        case 2:
        console.log('its tuesday');
        break;

        case 3:
        console.log('its wednesday');
        break;
        
        case 4:
        console.log('its thirsday');
        break;

        case 5:
        console.log('its friday');
        break;

        case 6:
        console.log('its saturday');
        break;

        case 7:
        console.log('its sundayday');
        break;
        default:
            console.log('Not invalid');
}


//types of Loops
// while
// do while
// for
// for/of or for/await
// for in

//1. while

let count = 0;

while(count < 10){

    console.log(count);
    count++;
  
}

// 2. do while
let count = 10;
do{
console.log(count);
count--;
} while(count > 0);


// 3.for 
let fruits =['🍉','🍌','🍍']
for(let i = 10; 1 < fruits.length; 1++){
    console.log(fruits[1])
}


// .anthing else which is not primitive

// 4. for in

// for(variable in object){

// }

let info = {
    name: 'ahmed',
    age: '23',
    height: '187',
    addrees: '220 streat'
    }
    for(const property in info){
        console.log(property + ':') + info[property];
    }