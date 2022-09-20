/*A.

console.log("I like pizza!");
console.log("It's really good!");

window.alert("pizza!");

*/

//This is a comment

/*This
is 
a
multiline
comment*/

/*B.
A variable is a container for storing data
A variable behaves as if it was the value that it contains

Two Steps:
1. Declaration (var, let, const)
2. Assignment (=assigment operator)



let firstName = "Odiee"; //string
let age =21;
age = age + 1; //number
let student = true; //booleans

console.log("You are", age, "years old.");
console.log("Hello", firstName);
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

*/

/* C.
arithmetic expression is a combination of...
operands (value, variables, etc.)
operators (+ - * / %)
that can be evaluated to a value
ex. y = x + 5;
*/

//let students = 21;

//students = students + 1;
//students = students / 2;

//let extraStudents = students % 2; // if the result is 0 that means even number. if 1 that means odd number.

/*shortcut:augemented assignment operator
but remainder assignment"%" is not possible to apply
students += 1;
students *=2;


console.log(students);
*/

/* operator precedence
1. parenthesis ()
2. exponents
3. multiplication & division
4. addition & subtraction*/

/*
let result = 1 + 2 * (3 + 4);

console.log(result);*/

/* D. 

//How to accept user input

//1. EASY WAY with a window prompt

//let username = window.prompt("What's your name?");
//console.log(username);

//2. DIFFICULT WAY HTML textbox

let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "hello " + username;
}
*/

/* E.
Type conversion = change the datatype of a value to another
                    (strings, numbers, booleans)
  

let age = window.prompt("How old are you?");

age = Number(age)
age +=1;

console.log("Happy Birthday! You are ", age, "years old.")


let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

/* F.
const = a variable that can't be changed
if you do, is gonna be: Uncaught TypeError: Assignment to constant variable.
//const PI = 22
//PI = 30
//circumference = 2 * pi * PI * radius;


let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

pi = 420.69;

circumference = 2 * pi * radius;

console.log("The circumference is:", circumference)
*/

/* G.
Math:


let x;
let y = 5;
let z = 9;
let maximum;
let minimum;

x = Math.PI;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x)

//maximum = Math. max(x, y, z);
//minimum = Math. min(x, y, z);



console.log(x);

*/

/* H. 1.

let a;
let b;
let c;

a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side C", c);

H. 2.

let a;
let b;
let c; 

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value
    a = Number(a);
    
    b = document.getElementById("bTextBox").value
    b = Number(b);
    
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;

}

*/



/*I.

let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count -=1;
    document.getElementById("countLabel").innerHTML = count;

}

document.getElementById("resetBtn").onclick = function(){
    count =0;
    document.getElementById("countLabel").innerHTML = count;

}

document.getElementById("increaseBtn").onclick = function(){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;

}
*/

/* J.



let x;
let y;
let z;

//console.log(x);
//console.log(y);
//console.log(z);

document.getElementById("rollButton").onclick = function() {
   
    x = Math.floor(Math.random() * 6);
    document.getElementById("xlabel").innerHTML = x;
   
    y = Math.floor(Math.random() * 6);
    document.getElementById("ylabel").innerHTML = y;

    z = Math.floor(Math.random() * 6);
    document.getElementById("zlabel").innerHTML = z;

}

*/

/* K.

useful string properties & methods



let userName = " Bro Code";
let phoneNumber = "123-456-7890"

//console.log(userName.length);
//console.log(userName.charAt(1));
//console.log(userName.indexOf("o"));
//console.log(userName.lastIndexOf("o"));
//userName =userName.trim()
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();

//phoneNumber = phoneNumber.replaceAll("-", "")


//console.log(phoneNumber);

*/

/* L.

    slice() 
    extracts a section of a string
    and returns it as a new string,
    without modifying the original string

let fullName = "Bro Code";
let firstName;
let lastName;

//lastName = fullName.slice(4);
//firstName = fullName.slice(0, 3);

//lastName = fullName.slice(fullName.indexOf(" ") + 1)
firstName = fullName.slice(0, fullName.indexOf(" "))

console.log(lastName);
console.log(firstName)
*/


/* M.

Method chaining = calling one method after another 
in one continuous line of code

let userName ="bro"

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter);
*/

/* N.

if statement = a basic form of decision making
                if a condition is true, then do something
                if not, then don't do it!

               
let age =60;

if(age >=65){
    console.log("You are a senior citizen!")
}

else if(age >= 18){
    console.log("You are an adult!")
}

else if(age < 0){
    console.log("YOU HAVEN'T BEEN BORN YET!")
}

else{
    console.log("You are a child!")
}
///////

let online = false;

if(online){
    console.log("You are online!")
}

else{
    console.log("You are offline!")
}
 */

/* O.

document.getElementById("myButton").onclick =function(){

        const myCheckBox = document.getElementById("myCheckBox");
        const visaBtn = document.getElementById("visaBtn");
        const mastercardBtn = document.getElementById("mastercardBtn");
        const paypalBtn = document.getElementById("paypalBtn");

        if(myCheckBox.checked){
            console.log("You are subscribed!");
        }
        else{
            console.log("Not Subscribed!");
        }

        if(visaBtn.checked){
            console.log("You are paying with a Visa!");
        }

        else if(mastercardBtn.checked){
            console.log("You are paying with a Master Card!");
        }

        else if(paypalBtn.checked){
            console.log("You are paying with a PayPal!");
        }

        else{
            console.log("You must select a payment type!");
        }

}
*/

/* P. 

    switch = statement that examines a value for 
    a match against many case clauses.
    More efficient that many "else if" statements


/// let grade = "A"
///switch(grade){
 //   case "A":
 //     console.log("you did great!");
 //     break;
 //}
let grade = 90;

switch(true){
    case grade >= 90:
    console.log("you did great!");
    break;

    case grade >= 80:
    console.log("You did good!");
    break;

    case grade >= 70:
    console.log("you did okay!");
    break;

    case grade >= 60:
    console.log("you passed ... barely");
    break;

    case grade > 60:
        console.log("you failed!");
        break;

    default:
        console.log(grade, "is not a letter grade!");
}

*/

/* R. 
    Gives us the ability to check more than 1 condition concurrently 
    && AND (BOTH conditions must be true)
    || OR (Either condition can be true)

//////////////
let temp = 11;
let sunny = false;

if(temp > 0 && temp < 30 || sunny == true){
    console.log ("The weather is good!");
}

else{
    console.log("The weather is bad!");
}
//////////////////

let temp = 44;
 
if(temp <= 0 || temp >= 30){
    console.log ("The weather is bad!");
}

else{
    console.log("The weather is good!");
}

*/

/* S.

    ! NOT logical operator
    typically used to reverse a condition's boolean value
    true -> false   false -> true


let temp = 15;
let sunny = false;

if(!(temp > 0)){
    console.log("it's cold outside");
}

else{
    console.log("it's warm outside");
}

if(!sunny){
    console.log("it's cloudy outside");
}

else{
    console.log("it's sunny outside");
}

*/

/* T. 
    while loop = repeat some code
                while some condition is true
                potentially infinite

let username ="";

while(username == "" || username == null){

    username = window.prompt("Enter your name");
}

console.log("Hello", username);

/////while(1 == 1){
 //////   console.log("help")
////}
*/

/* T.

    do while loop = do something,
                    then check the condition,
                    repeat if condition is true

let username = "";

do{
    username = window.prompt("Enter your name");
}while(username == "")

console.log("hello", username)

*/

/* U
    for loop = repeat some code a 
                certain amount of times
/////
for(let counter = 1; counter <= 10; counter +=1){
console.log(counter);
}
*/

/* V.
break = breaks out of a loop entirely
continue = skip an iteration of a loop

for(let counter = 1; counter <= 20; counter +=1){
    if(counter == 13){
        break;
    }
    else if(counter == 5){
        continue;
    }
    console.log(counter);
}
*/

/* Y. 
nested loop = a loop inside of another loop

////////
for( let a = 1; a <= rows; a += 1 ){
    for( let b = 1; b <= 3; b += 1 ){
           console.log(b)
    }
}
///////


let symbol = window.prompt("Enter a symbol to use")
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");

for( let i = 1; i <= rows; i += 1 ){
    for( let j = 1; j <= columns; j += 1 ){
            document.getElementById("myRectangle").innerHTML += symbol;

    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}

*/
/* Z.

    function = Define code once, and use it many times.
               To perfprm some code, call the function name.


startProgram();

function startProgram(){
    let userName ="Odie";
    let age = 16;

    happyBirthday(userName, age);
}

////////// the same
function happyBirthday(userName, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName);
    console.log("Happy birthday to you!");
    console.log("You are", age, " years old!");
}
/////////////


function happyBirthday(a, b){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", a);
    console.log("Happy birthday to you!");
    console.log("You are", b, " years old!");
}

*/

/*
  X.

  return = returns a value back to the place
            where you invoked a function
            ////////////

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("the area is:", area);

function getArea(width, height){
    let result = width * height;
    return result;

}
*/

/* W. 

    ternary operator =Shortcut for an if/else statement
                        Takes 3 operands

                        1. a condition with ?
                        2. expression if True :
                        3. expression if False


condition ? exprIfTrue : exprIfFalse


let adult =checkAge(21);
console.log(adult);

//////////if write , "return age >= ? true : false;", is gonna be same
function checkAge(age){

    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}
//////////////////
checkWinner(true)

function checkWinner(win){

    win ? console.log("You Win!") : console.log("You Lose");
}
*/


/* A1.

variable scope = where a variable is accessible

let = variables are limited to block scope{}
var = variables are limited to function(){}

1.
loop içinde eğer variable olarak let koyarsak loop içindeki console yazdırır.
loop dışındaki console ise yazdırmaz. Çünkü loop scope u ile sınırlı let;
eğer loop içindeki let i var ile değiştirirsek  bu durumda loop dışındaki console calısır.

for(var i = 1; i<= 3; i += 1){
   console.log(i);
}

console.log(i);
*/
/*
2. 
function içinde var tanımlanırsa sadece function içiyle sınırlı kalır.
dışındaki console yazdırmaz terminale bir şey.

doSomething();

function doSomething(){
    for(var i = 1; i<= 3; i += 1){
        console.log(i);
     }
//console.log(i);
}

console.log(i);

3.
global variables = is declared outside any function
(if global, var will CHANGE browser's window properties)

let name = "bro"; ( global variable eğer var ile değiştirirsek browser özelliklerinde değişiklik olur 
    ör: let name = "bro"; var name = "bro"; bir öncekinde browser name property "" iken var da bro olarak değişir.)

doSomething();

function doSomething(){
    for(var i = 1; i<= 3; i += 1){
        // console.log(i);
     }

}

console.log(i);

*/

/* A2. 

Template literals = delimited with (`)
                    instead of double or single quotes
                    allows embedded variables and expressions
uzun uzun console a yazacağına böle shortcut ı varmış.

let userName = "bro";
let items = 3;
let total = 75;
                
console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your card`);
console.log(`Your total is $${total}`)

///////////// the same

let userName = "bro";
let items = 3;
let total = 75;

let text =
`Hello ${userName}
You have ${items} items in your card
Your total is $${total}`;

console.log(text);

///////////////// with html

let userName = "bro";
let items = 3;
let total = 75;

let text =
`Hello ${userName}<br>
You have ${items} items in your card<br>
Your total is $${total}`;

document.getElementById("myLabel").innerHTML = text;


*/

/*A3.

toLocaleString() = returns a string with a language
                    sensitive representation of this number

number.toLocaleString(locale, {options});

"locale" = specify that language (undefined = default set in browser)
"options" = object with formatting options 



let myNum = 100;

//myNum = myNum.toLocaleString("en-US"); // US english
//myNum = myNum.toLocaleString("hi-IN"); // Hindi
//myNum = myNum.toLocaleString("de-DE"); // Germarny

//myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

//myNum = myNum.toLocaleString(undefined, {style: "percent"});
//myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);

*/

/*
A4.

const answer = (Math.floor(Math.random() * 10 + 1));
let guesses = 0;


document.getElementById("submitButton").onclick = function (){

    let guess = document.getElementById("guessField").value    
    guesses += 1;

    if(guess == answer){
        alert(`${answer} is the #. It took you ${guesses} guesses`)
    }
    else if(guess < answer){
        alert("Too small");
    }
    else{
        alert("Too large");
    }
}
*/

/* A5.


document.getElementById("submitButton").onclick = function(){

        let temp;

        if(document.getElementById("cButton").checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            temp = toCelsius(temp);
            document.getElementById("tempLabel").innerHTML = temp + "°C";
        }
        else if(document.getElementById("fButton").checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            temp = toFahreneit(temp);
            document.getElementById("tempLabel").innerHTML = temp + "°F";
        }
        else{
            document.getElementById("tempLabel").innerHTML = "Select a unit";
        }
}

function toCelsius(temp){
    return (temp - 32) * (5/9);
}
            
function toFahreneit(temp){
    return temp * 9 / 5 + 32;
}

*/

/* A6. 
    array = think of it as a variable
            that can store multiple values

let fruits = ["apple", "orange", "banana"];

//fruits[0] = "coconut"

fruits.push("lemon"); // add an element
fruits.pop(); //removes last element
fruits.unshift("mango"); //add element to the beginning
fruits.shift(); //removes element from beginning

let length = fruits.length;
let index = fruits.indexOf("kiwi")

console.log(length);

*/

/* A7.


let prices = [5, 10, 15, 20];

for(let i = prices.length; i >= 0; i -= 1){
    console.log(prices[i]);
}
/////////////

let prices = [5, 10, 15, 20, 25];

for(let price of prices){
    console.log(price);
}
*/

/* A8. 

let fruits = ["apple", "orange", "banana", "mango"];

//fruits = fruits.sort();
//fruits = fruits.sort().reverse();


for(let fruit of fruits){
    console.log(fruit);
}
*/

/* A9. 
// 2D array = An array of arrays

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];


let grocerylist = [fruits, vegetables, meats];

grocerylist[0][0] ="mangoes"; //first index row, second is column

for(let list of grocerylist){
    for(let food of list){
    console.log(food);
    }
}
*/

/* A10.

spread operator = allows an iterable such as an array
...               or string to be expanded in places 
                  where zero or more arguments are expected
                  (unpacks the elements)



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let maximum = Math.max(numbers);


console.log(maximum);

//NaN = Not a Number



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let maximum = Math.max(...numbers);
console.log(maximum);

/////////////////

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr. Krabs", "Plankton"];

class1.push(class2);

console.log(class1);
////////////////


let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr. Krabs", "Plankton"];

class1.push(...class2);

console.log(class1);

////////////////


let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr. Krabs", "Plankton"];

class1.push(...class2);

console.log(...class1);
*/


/* A11.

    rest parameters = represents an indefinite number
                    of parameters
                    (packs arguments into an array) 

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total;
}

//////////////////
function sum(a, b, c){
    return a + b + c;
}

function sum2(a, b, c, d){
    return a + b + c + d;
}

function sum3(a, b, c, d, e){
    return a + b + c + d + e;
}
*/

/* A12.
    callback = a function passed as an argument
                to another function.

    Ensures that a function is not going to run before atask
    is completed. Helps us develop asynchronous code.
    (When one function has to wait for another function)
    that helps us avoid errors and potential problems 
    Ex. Wait for a file to load


sum(2, 3, displayDOM);


function sum(x, y, callBack){
    let result = x + y;
    callBack(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;

}

*/

/*A13.

array.forEach() = executes a provided callback function
                  once for each array element


let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);

}

function print(element){
    console.log(element);
}
*/


/*A14.
array.map() = executes a provided callback function once
              for each array element AND creates a new array


let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube)

cubes.forEach(print);

function square(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3)
}

function print(element) {
    console.log(element);
}

*/

/*A15.
    array.filter() = creates a new array with all elements
                    that pass the test provided by a function


let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element) {
    return element >= 18;
}

function print(element) {
    console.log(element);
}

*/

/* A16.

    array.reduce() = reduces an array to a single value



let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);

console.log(`The total is: $${total}`)

function checkOut(total, element){
    return total + element;
}

*/

/* A17.



let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort(x, y) {
    return y - x;
}

function ascendingSort(x, y) {
    return x - y;
}

function print(element) {
    console.log(element);
}

*/

/* A18.

function expression = function without a name (anonymous function)
                    avoid polluting the global scope with names
                    write it, then forget about it

const greeting = function(){
    console.log("hello");
}

greeting(); ////////you dont need to have name of func this using is expression

1.

let count = 0;

function increaseCount() {
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
}

function decreaseCount() {
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}

//////////////////////////

2.

let count = 0;

document.getElementById("increaseBtn").onclick = function() {
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseBtn").onclick = function() {
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}

*/


/* A19.

    arrow function = compact alternative to a traditional function expression

    =>

    1.

    const greeting = function(userName) {
    console.log(`hello ${userName}`);
    }

    greeting("bro");

    //////////////// the same

    const greeting = (userName)  => console.log(`hello ${userName}`);

    greeting("bro");

    ///////// (userName)

    if u have 1 argument u dont need parentheses; "userName"
    if u dont have you need parentheses; "()"
    if u have more than 1 argument u have to use parentheses; "(userName, odie)"
    
    //////////

    2.

    const percent = function(x, y){
    return x / y * 100;
    }

    console.log(`${percent(75, 100)}%`);

    //////

    const percent = (x, y) => x / y * 100;

    console.log(`${percent(75, 100)}%`);

    /////////

    3.

    let grades = [100, 50, 90, 60, 80, 70];

    grades.sort(descending);
    grades.forEach(print);

    function descending(x,y) {
        return y - x;
    }

    function print(element) {
        console.log(element);
    }

    /////////////the same

    let grades = [100, 50, 90, 60, 80, 70];

    grades.sort(function(x,y) {
        return y - x;
    });

    grades.forEach(function (element) {
       console.log(element);
    });

    ///////////////the same

    let grades = [100, 50, 90, 60, 80, 70];

    grades.sort((x,y) => y - x);

    grades.forEach((element) => console.log(element));
 

*/

/* A20. SHUFFLE CARD GAME

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

 shuffle(cards);

 //console.log(cards);

 cards.forEach(card => console.log(card));

 function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;

    }

    return array;
 }

*/

/*A21.
    nested function = Functions inside other functions.
                      Outer functions have access to inner functions.
                      Inner functions are "hidden" from outside the outer function.
                      used in closures (future video topic)


let userName = "bro";
let userInbox = 0;

login();

function login() {
    displayUserName();
    displayUserInbox();
}

function displayUserName() {
    console.log(`Welcome ${userName}`);
}

function displayUserInbox() {
    console.log(`You have ${userInbox} new messages`);
}

//////////or

let userName = "bro";
let userInbox = 0;

displayUserName();
displayUserInbox();

function login() {
    displayUserName();
    displayUserInbox();
}

function displayUserName() {
    console.log(`Welcome ${userName}`);
}

function displayUserInbox() {
    console.log(`You have ${userInbox} new messages`);
}


/////////////or should use like this:


let userName = "bro";
let userInbox = 0;

login();

function login() {
    displayUserName();
    displayUserInbox();

    function displayUserName() {
        console.log(`Welcome ${userName}`);
    }
    
    function displayUserInbox() {
        console.log(`You have ${userInbox} new messages`);
    }

}

*/

/*A22.

    Map = object that holds key-value pairs of any data type


const store = new Map([
    ["x", 20],
    ["y", 30],
    ["z", 10],
    ["w", 50]
]);

let shoppingChart = 5;
//get method
//shoppingChart += store.get("x");
//shoppingChart += store.get("z");
//console.log(shoppingChart);

//set method
//store.set("w", 100);


//delete method
//store.delete("y");
//console.log(store);

// has method
//console.log(store.has("H"));

// size property
console.log(store.size);

store.forEach((value, key) => console.log(`${key} $${value}`));
*/

/* A23.

    object = A group of properties and methods 
            properties = what an object has methods 
            = what an object can do use . to access
            properties/methods



const car1 = {

//properties / has
    model: "Mustang",
    color: "red",
    year: 2023,

//methods / do
    drive : function() {
        console.log("You drive the car");
    },
    brake : function () {
        console.log("You step on the brakes");
    },

}

// use "." for methods and properties

//console.log(car1.model);

//car1.drive();

const car2 = {

        model: "Corvette",
        color: "blue",
        year: 2024,
    
        drive : function() {
            console.log("You drive the car");
        },
        brake : function () {
            console.log("You step on the brakes");
        },
    
    }
    


    console.log(car2.model);
    
    car2.drive();

*/

/*A24.

    this = reference to a particular object
           the object depends on the immediate context





const car1 = {

    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function() {
        console.log(`You drive the ${this.model}`);
    }
}

const car2 = {

    model: "Corvette",
    color: "blue",
    year: 2024,

    drive : function() {
        console.log(`You drive the ${car2.model}`);
    }
}

car1.drive();
car2.drive();



// use "this" = use "window" => same thing
//this.name = "Odie";
window.name = "bro";
console.log(this);
console.log(this.name);

*/


/*A25.

    class = a blueprint for creating objects
            define what properties and methods they have 
            use a constructor for unique properties


class Player {
    score = 0;

    pause () {
        console.log("You paused the game");
    }
    exit () {
        console.log("You exited the game")
    }
}

const player1 = new Player(); //new keyword

player1.score += 1;

console.log(player1.score);

player1.pause();
player1.exit();


*/

/* A26.

consructor = a special method of a class,
            accepts arguments and assigns properties



class Student {

    constructor(name, age, gpa) {
        this.name = name
        this.age = age
        this.gpa = gpa
    }

    study () {
        console.log(`${this.name} is studying`);
    }

}

const student1 = new Student("Odie", 16, 3.2);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

student1.study();

*/

/* A27.

    static = belongs to the class, not the objects
             properties: useful for caches, fixed-configuration
             methods: useful for utility functions



class Car {

    static numberOfCars = 0;

    constructor (model) {
        this.model =model;
        Car.numberOfCars += 1;
    }

    static startRace () {
        console.log("3... 2... 1... GO!")
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

//console.log(car1.numberOfCars);
//console.log(car2.numberOfCars);
//console.log(car3.numberOfCars);
//console.log(Car.numberOfCars);

//car1.startRace(); // not static 

Car.startRace(); // static
*/

/*A28.

    inheritance = a child class can inherit all the 
                  mehods an properties from another class



class Rabbit {
    alive = true;
    name = "rabbit";


    eat () {
        console.log(`This ${this.name} is eating`);
    }

    sleep () {
       console.log(`This ${this.name} is sleeping`);
    }

    run () {
       console.log(`This ${this.name} is running`);
    }

}


class Fish {
    alive = true;
    name = "fish";


    eat () {
        console.log(`This ${this.name} is eating`);
    }

    sleep () {
       console.log(`This ${this.name} is sleeping`);
    }

    swim () {
       console.log(`This ${this.name} is swimming`);
    }

}


class Hawk {
    alive = true;
    name = "hawk";


    eat () {
        console.log(`This ${this.name} is eating`);
    }

    sleep () {
       console.log(`This ${this.name} is sleeping`);
    }

    fly () {
       console.log(`This ${this.name} is flying`);
    }

}


//////////////or u can choose to have a parent class then the others

///////// Parent class
class Animal {
    alive = true;

    eat () {
        console.log(`This ${this.name} is eating`);
    }

    sleep () {
       console.log(`This ${this.name} is sleeping`);
    }
}

////////child class
class Rabbit extends Animal {
    name = "rabbit";

    run () {
       console.log(`This ${this.name} is running`);
    }
}

///////child class
class Fish extends Animal {
    name = "fish";

    swim () {
       console.log(`This ${this.name} is swimming`);
    }
}

/////////child class
class Hawk extends Animal {
    name = "hawk";

    fly () {
       console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit ();
const fish = new Fish ();
const hawk = new Hawk ();

console.log(rabbit.alive);
rabbit.run();

console.log(fish.name);
fish.eat ();
fish.swim ();

console.log(hawk.alive);
hawk.fly ();
hawk.sleep();

*/

/*A29.
    super = Refers to the parent class.
            commonly used to invoke constructor of a parent class



class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal {

    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;

    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;

    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;

    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);


console.log(rabbit.name);
console.log(fish.age);
console.log(hawk.flySpeed);

*/


/*A30.
    get = binds an object property to a function
           when that property is accessed

    set = inds an object property to a function
           when that property is assigned a value


class Car {
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    get power(){
        return this._power;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas(value) {
        if(value > 50){
            value = 50;
        }
        else if (value < 0){
            value = 0;
        }
        this._gas = value;
    }
}

let car = new Car(400);

car.gas = -22222222222;

car._power = 1000000000;

console.log(car.power + "hp");

console.log(car.gas);

*/

/*A31.

class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

changeColor(car3, "gold");
displayInfo(car3);

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, color){
    car.color = color;
}

*/

/*A32.

create an object in JS



class Car{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive () {
        console.log(`You drive the ${this.model}`);
    }

}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");


const cars = [car1, car2, car3]; // create an object with an array

//console.log(cars[0].model);
//console.log(cars[1].model);
//console.log(cars[2].model);


//cars[0].drive();
//cars[1].drive();
//cars[2].drive();

startRace(cars);

function startRace(cars) {
    for(const car of cars){
        car.drive();
    }
}

*/

/*A33.
    anonymous objects = Objects without a name
                        Not directly referenced
                        Less syntax. No need for unique names



class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}
//////////////////////////
let card1 = new Card("A", "Hearts");
let card2 = new Card("A", "Spades");
let card3 = new Card("A", "Diamonds");
let card4 = new Card("A", "Clubs");

let cards = [card1, card2, card3, card4];

console.log(card1.value + card1.suit);
console.log(cards[0].value + cards[0].suit);
///////////////////////////

let cards = [new Card("A", "Hearts"),
            new Card("A", "Spades"),
            new Card("A", "Diamonds"),
            new Card("A", "Clubs")];

console.log(cards[0].value + cards[0].suit);

cards.forEach(card => console.log(`${card.value} ${card.suit}`));

*/

/*A34.
    error = object with a description of
            something went wrong

            Can't open a file
            Lose connection
            User types incorrect input
            TypeError 

    throw = executes a use-defined error


try{
    let x = window.prompt("Enter a #");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number!";
    if (x == "") throw "That was empty!";

    console.log(`${x} is a number`);
}

catch(error) {
    console.log(error);
}

finally {
    console.log("This always executes");
}

*/

/*A35.
    setTimeout() = invokes a function after a number of milliseconds
                   asynchronous function (doesn't pause execution)



let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage (item, price) {
    alert(`Buy this ${item} for $${price}!`);
}

function secondMessage () {
    alert("This is not a scam!");
}

function thirdMessage () {
    alert("DO ITT!");
}

document.getElementById("myButton").onclick = function () {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("Thanks for buying <3")
}

*/

/*A36.

    setInterval() = invokes a function repeatedly after a number of milisecond
                    asynchronous function (doesn't pause execution)



let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);

const myTimer = setInterval(countUp, 5000, max);

function countUp(max) {
    count +=1;
    console.log(count);
    if(count >= max) {
        clearInterval();
    }
}

*/


/*A37.
    The Date object is used to work with dates & times
    moths and days are begin index of 0


let date = new Date();
//let date = new Date(100000000000);
//let date = new Date(2023, 9, 20, 1, 0, 6);
//let date = new Date("January 26, 2024 00:00:00");

let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let Month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();

date.setFullYear(2022);
date.setMonth(5); 
date.setDate(18);
date.setHours(11);
date.setMinutes(17);
date.setSeconds(18);
date.setMilliseconds(0);



//date = date.toLocaleString();
//console.log(date);


document.getElementById("myLabel").innerHTML = formatTime (date);


function formatDate (date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`;
}

function formatTime (date) {
    let hours = date.getHours() + 5;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm =hours >= 12 ? "pm" : "am";

    hours = (hours % 12) || 12;
    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
}

*/


/*A38.

Clock Program



const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update () {

    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime (date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm =hours >= 12 ? "pm" : "am";
        hours = (hours % 12) || 12;

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);


        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }

    function formatZeroes(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;

    }
}

*/

/* A39.
    synchronous code = In an ordered sequence.
                       Step-by-step linear instructions
                       (start now, finish now)

    asynchronous code = Out of sequence.
                        Ex. Access a database 
                            Fetch a file 
                            Tasks that take time
                        (start now, finish sometime later)



console.log("START");
console.log("This step is synchronous");
console.log("END");


console.log("START");
setTimeout(() => console.log("This is asynchronous"), 5000)
console.log("END");

*/

/*A40.

console.time() = Starts a timer you can use to
                track how long an operation takes 
                Give each timer a unique name.

//start
console.time("Response time");

//alert("CLICK THE OK BUTTON!");
//setTimeout(() => console.log("HELLO!"), 3000);

//end
console.timeEnd("Response time");
*/

/*A41.
    promise = object that encapsulates the result of an asynchronous operation
              let asynchronous methods return values like synchronous methods
              "I promise to return something in the future"

               the STATE is "pending" then: "fulfilled" or "rejected"
               the RESULT is what can be returned 
               2 parts producing & consuming


//this is producing code
const promise = new Promise((resolve, reject) => {// = new Promise(error or function) but we used func.

    let fileLoaded = false;

    if(fileLoaded) {
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
});
//if promise is result then method perform a function
//promise.then(
//call back to a func = doSomething ,
// func expression = function() {} 
//or error func expression = () => {}
//)
//this is consuming code
promise.then(value => console.log(value))//Uncaught excepsion
       .catch(error => console.log(error));

///////////////////


const promise = new Promise(resolve => {
    setTimeout(resolve, 5000);
});

promise.then(() => console.log("Thanks for waiting"));

///////////



const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting"));

*/

/*A42.
    async = makes a function return a Promise


async function loadFile () {

    let fileLoaded = true;

    if (fileLoaded) {
        return "File loaded";
    }
    else {
        throw "File NOT loaded";
    } 

}

loadFile().then(value => console.log(value))
          .catch(error => console.log(error));


// if we don't use async we return to promise for ex.:


function loadFile () {

    let fileLoaded = false;

    if (fileLoaded) {
        return Promise.resolve("File loaded");
    }
    else {
        return Promise.reject("File NOT loaded");
    } 

}

loadFile().then(value => console.log(value))
          .catch(error => console.log(error));

*/ 

/*A42.
    await = makes an async function wait for a Promise


async function loadFile () {

    let fileLoaded = true;

    if (fileLoaded) {
        return "File loaded";
    }
    else {
        throw "File NOT loaded";
    } 

}

async function startProcess() {
    try{
      let message = await loadFile();//waiting for promise
      console.log(message);
    }
    catch(error) {
        console.log(error);
    }
}

startProcess();

*/

/*A43. Modules
    The idea behind a module is that it's file of reusable code
    We can import section of pre-written code to use whenever
    Great for any general utility values and functions
    Helps to make your code more reusable and maintanable
    Think of modules as seperate chapters of a book

    HTML and created new js file which is math_module_util.js



import {PI, getCircumference, getArea} from "./math_module_util.js"

console.log(PI);

let circumference = getCircumference(10);
console.log(circumference);

let area = getArea(10);
console.log(area);

/////////////////////same thing 

import *as MathUtil from "./math_module_util.js"

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);
*/



/*A44.
    DOM = Document Object Model (API - Application Programming Interface)
          An interface for changing the content of a page 




//console.log(document); // demonstrates html document
//console.dir(document); //properties of DOM
//console.log(document.title);
//console.log(document.URL);

//document.title = "Title goes here!";
//document.location = "http://www.google.com";


document.body.style.backgroundColor = "skyblue";
document.getElementById("myDiv").innerHTML = "Hello!";

*/

/*A45. Element Selectors

let element = document.getElementById("myTitle");

element.style.backgroundColor = "skyblue";

//////////////////

let fruits = document.getElementsByName("fruits");
//console.log(fruits[0]);

fruits.forEach(fruit => {
    if(fruit.checked) {
        console.log(fruit.value);
    }
})

///////////////////

let vegetables = document.getElementsByTagName("li");

vegetables[2].style.backgroundColor = "yellow";

//////////////

let desserts = document.getElementsByClassName("desserts");
desserts[2].style.backgroundColor = "green";

////////////////////

let element = document.querySelector("#myTitle");//(".desserts"), ("li"), ("[for]"), 
element.style.backgroundColor = "grey"

///////////////

let element = document.querySelectorAll("[for]");
element.forEach(element => {
    element.style.backgroundColor = "grey"
})

*/

/* A46.

let element = document.body;
let child = element.firstElementChild;
child.style.backgroundColor = "yellow";

//////////////////

let element = document.body;
let child = element.lastElementChild; //<script type = "module" src="index1.js"></script> bu yüzden olmadı!
child.style.backgroundColor = "yellow";

///////////////////

let element = document.querySelector("#vegetables");
let sibling = element.nextElementSibling;
sibling.style.backgroundColor = "lightyellow";

////////////////////

let element = document.querySelector("#fruits");
let child = element.children[1]//= element.lastElementChild
child.style.backgroundColor = "lightyellow";

////////////////////

let element = document.querySelector("#fruits");
let children = Array.from(element.children);

children.forEach(child => child.style.backgroundColor = "lightyellow");


/////////////////////


// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// .Array.from(.children)


*/

/*A47.
    add/change HTML elements
    .innerHTML (vulnerable to XSS attacks)
    .textContent (more secure)



const nameTag = document.createElement("h1");
nameTag.textContent = window.prompt("Enter your name");// same but for more security use textcontent / nameTag.innerHTML = window.prompt("Enter your name");//"Bro";
document.body.append(nameTag);

////////////////

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
//myList.append(listItem);// to add on the beginning of the list; myList.prepend(listItem);
//myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);
*/

/*A48.

changing some css properties with using java script


const title = document.getElementById("myTitle");

title.style.backgroundColor = "rgb(50, 200, 250)";

title.style.color = "red";
title.style.fontFamily = "consolas";
title.style.textAlign = "center";
title.style.border = "2px solid";
title.style.display = "block";


*/


/*A49.
////////////////1.
function doSomething () {
    alert("You did something!");
}
//////////////////////////2.

const element = document.getElementById("myButton");
element.onclick = doSomething;
 
function doSomething () {
    alert("You did something!");
}
//////////////////3.

const element = document.body;

element.onload = doSomething;
 
function doSomething () {
    alert("You did something!");
}
///////////////////4.

const element = document.getElementById("myText");
element.onchange = doSomething;

 
function doSomething () {
    alert("You did something!");
}
////////////////////5.

const element = document.getElementById("myDiv");
//element.onmouseover = doSomething;
//element.onmouseot = doSomethingElse;

element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

 
function doSomething () {
    element.style.backgroundColor = "red";
}

function doSomethingElse () {
    element.style.backgroundColor = "blue";
}
*/

/*A50.
    .addEventListener(event, function, useCpture) 
    You can add many event handlers to one element.
    Even the same event that invokes different functions

    First inner then outer but if u add
    outerDiv.addEventListener("click", changeRed. true);
    The fisrt step ll be outer then inner


const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeRed);
outerDiv.addEventListener("click", changeRed);

function changeRed () {
    this.style.backgroundColor = "red";
}
*/

/*51A. show/hide HTML elements
  52A. detect key presees
  53A. animations
  54A. canvas API
  55A. window
  56A. cookies 
  57A - 61A for create smt
https://www.youtube.com/watch?v=8dWL3wF_OMw&t=962s
*/

























