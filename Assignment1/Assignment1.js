//...Q1.Write a function to get the sum of n natural numbers.
function numSum(n){
var  sum=0;
for(i=0; i<=n; i++){
sum+ =  i ;
}
console.log(sum);
}
numSum(20);

//...2.WAF to check if the number is even or not by using if else statement.

function isEven(n) {
if (n%2 == 0)
{
return true;
}
else {
return false;
}
};
//..3 .WAF to check if the number is prime or not.

function isPrime(n){
if(n<2)
return false;
for(let i=2;i<n;i++){
if(n%i==0){
return false;}
}
return true;}
//..Q4. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using switch case only.

 function getWeekDay(n) {
var day;
switch (n) {
case 1:
day = "Sunday";
break;
case 2:
day = "Monday";
break;
case 3:
day = "Tuesday";
break;
case 4:
day = "Wednesday";
break;
case 5:
day = "Thursday";
break;
case 6:
day = "Friday";
break;
case 7:
day = "Saturday";
break;
default:
day="Invalid Input";
}
return day;
}

//..Q5. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using If Else only.

function getWeekDay(n) {
var day;
if(n==1)
day = "Sunday";
else if(n==2)
day = "Monday";
else if(n==3)
day = "Tuesday";
else if(n==4)
day = "Wednesday";
else if(n==5)
day = "Thursday";
else if(n==6)
day = "Friday";
else if(n==7)
day = "Saturday";
else
day="Invalid Input";
}
return day;
}

//..Q6. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using ternary operator only.

function getWeekDay(n) {
return n < 0 || n > 7 ? "Invalid Input": (n==1 ? 'Sunday' : (n==2 ? 'Monday' : (n==3 ? 'Tuesday' : (n==4 ? 'Wednesday' : (n==5 ? 'Thursday' : (n==6 ? 'Friday' :  'Saturday' ))))));
}
//..Q7. WAF to search an element in the array?

function arraySearch(arr, num) {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] === num) {
 return 'Found'; 
} 
} 
return 'Not Found';
}

//..Q8. WAF to find the max in the array?

function getArrayMax(array){
return Math.max.apply(null, array);
}
var arr=[11, 5, 2, 9];
var maxarr=getArrayMax(arr);

//..Q9. WAF to find the min in the array?

function getArrayMin(array){
return Math.min.apply(null, array);
}
var ages=[1, 5, 2, 9];
var minAge=getArrayMin(ages);
Q10. WAF to find the factorial of n
function factorial(n) {
if (n == 0 || n == 1) {
return 1;
} else
return (n * (factorial - 1)); 
}

//..Q11. WAF to reverse an array.

function reverseArray(arr) {
var reverseArr = [];
for (var i = arr.length - 1; i >= 0; i--)
{
reverseArr.push(arr[i]); }
return reverseArr;}

//..Q12. WAF to reverse a string.

function reverseString(str) {
let newString = ""; 
for (let i = str.length - 1; i >= 0; i--)
{
 newString += str[i];
 } 
return newString;
}

//..Q13. WAF to remove the duplicate chars in the string?

function removeDuplicate(str) {
var index = 0;
 for (var i = 0; i; i++) {
 for (var j = 0; j < i; j++) {
 if (str[i] == str[j]) { 
break;
 }
 }
 if (j == i) {
 str[index++] = str[i]; 
}
 }
 return str.join("").slice(str, index);
}

//..Q14. WAF to check if the number is a palindrome or not.

function Palindrome(num) { 
var rem, temp, final = 0; 
temp = num; 
while (num > 0) { 
rem = num % 10; 
num = parseInt(num / 10); 
final = final * 10 + rem; 
}
 if (final == temp) { 
return 'The inputed number is Palindrome'; 
} else
 {
 return 'not palindrome'; 
}
}
//..Q15. WAF to check if the string entered is the palindrome string or not.?

function checkPalindrome(str) { 
var len = string.length; 
for (let i = 0; i < len / 2; i++) 
{
 if (string[i] !== string[len - 1 - i]) 
{
 return 'not palindrome'; 
}
 }
 return 'palindrome';
}
//..Q16. WAF to count the number of words in the string.?

function countWords(str) { 
return str.split(' ').lenght;
}

//..Q17. WAF to print the number of days in the month using switch case?

	function daysInMonth(year, month) {
	switch (month) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
	dayCount = 31;
	break;
	case 4:
	case 6:
	case 9:
	case 11:
	dayCount = 30;
	break;
	case 2:
	if (((year % 4 == 0) && !(year % 100 == 0))
	|| (year % 400 == 0))
	dayCount = 29;
	else
	dayCount = 28;
	break;
	default:
	dayCount = 'Invalid Year or Month';
	}
	}

//..Q18. WAF to check if the number is 0, -ve or +ve using switch case.?

Function checker(n){
Let flag =””;
Switch(((n===0)?0:n>0?1:-1))
{
case -1:
console.log(“-ve”);
break;
case 1:
console.log(“+ve”);
break;
case 0:
console.log(“0”);
break;
}}
checker(1);
checker(-1);
checker(0);

//..Q19. WAF to check if the number is even or not using if else?
//.. Duplicate question already in 2nd Question



//..Q20. WAF to check if the number is even or not using switch case.

function checkEvenSC(num) {
res = ' '; switch (num % 2) {
case 0: res = 'Even'; break;
case 1: res = 'Not Even';
break;
default: return 'Invalid Input';
 }
}

//..Q21. WAF to reverse only words in the string.
	Example:
	“Hello this is sample”
	o/p
	‘olleH sight si elpmas’


function myFunction(str) {
return str.split('').reverse().join('').split(' ').reverse().join(' ')};

//..Q22. WAF to count the occurrence of a given characters in the string?

function countChar(str, char)
{
let count = 0;
for (let i = 0; i < str.length; i++) {
if (str.charAt(i) == char) {
count += 1;
}
} return count;
}

