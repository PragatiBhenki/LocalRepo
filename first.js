console.log("Hi everyone this is my first website");
age=24;
console.log(age);
//-----------Arithmetic opration
let a=10;
let b=10;
console.log("a+b",a+b);
console.log("a-b",a-b);
console.log("a*b",a*b);
let mode="dark";
//--------------Logical Stetment
let color;
if(mode ==="dark")
{
    color="black";
}else
{
    color="white";
}
console.log(color);
//--------------------------
let agee=25;
if(agee>=18){
    console.log("vote")
}else{
    console.log("not vote")
}
//-----------------------------
let num=11;
if(num%2===0){
    console.log("even")
}else{
    console.log("odd");
}
//-----------------
if(mode==="dark"){
    color="black";
}else if(mode==="pink"){
color="Pink"
}else{
    color="White"
}
console.log(color);
//---------------------
let number = -5;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
//-----------------------
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//---------------------
for(let i=1;i<=20;i++)
{
    if(i%20===0){
        console.log(i);
    }
}
//------------Arrys----------
let marrks=[97,78,95,58,59];
console.log(marrks);
//---------print all element of array
let arr =[10,20,30,40,50];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//--------sum of eelment-----------
let sum=0;
for(let i=0;i<arr.length;i++){
    sum +=arr[i];
}
console.log("sum=",sum);
//----------largest no of array-----
let a1 =[45,67,89,23,56];
let largest=a1[0];
for(let i=1;i<arr.length;i++){
    if(a1[i]>largest){
        largest=a1[i];
    }
}
console.log("Largest number=",largest);
//---------Reverse array-------
let reverse=[]
for(let i=arr.length-1;i>=0;i--){
    reverse.push(arr[i]);
}
console.log("Reversed array=",reverse);
//-----------odd ,even no array---------
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i] + " is Even");
    } else {
        console.log(arr[i] + " is Odd");
    }
}
//---------------------------------------
function showMessage() {
    alert("Keep Learning React & Node 🚀 You are doing great!");
}


