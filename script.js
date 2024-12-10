 // To bring the dynamic changes within an html document we use JavaScript.

 // JavaScript is Case Sensitive.
 
 /*console.log("Hi Hrudhey");
 console.log("hi");*/          //printing a content

 /* var a= 1;
 console.log(a); */        // printing the asigned variable

/*var a= 5;
console.log(a);      //  'var' is used globally
{
    var a =10;
    console.log(a);  // even in a different block({}) var is used globally
} */

   /* let a= 5;
    console.log(a);

    let a=10;        // when a variable is declared globally using let it cannot be resued
    console.log(a);*/

   /* let b= 10;
    console.log(b);
    {
        let b= 5;
        console.log(b);  // within a block a variable name can be used only once
    }*/

        /*const a= 10;
        console.log(a); 
        {                       // while using const the value cannot be changed
        a=10;
        console.log(a);}*/

        // while writing identifiers uswe meaningful names , don't start with numbers

        // use camelCase (1st letter is small then rest of the 1st leters are capital)
        // PascalCase 

 /* var a
console.log(typeof(a)); */         // to get the datatype of the identifier

// number,string, Boolean, Null, undefined, symbol (Primitive data types)

/*var name= 'Keziah', age='23';
console.log("My name is NAME and age is AGE");
                                                           //String concatenation
console.log("My name is " + name + " and age is "+ age);

var sub= "FSD in MERN"
console.log("My course name is ....");
console.log( "My course name is "+ sub); */

/*const text= "My name is Godwin and age is 25";    
console.log(text.length); */                     // to find the length of the string

/*const text= "My name is Godwin and age is 26";
console.log(text.substring(11,17));   */          // the result will be from the 12th character to the end letter

/* const text= "My name is Godwin and age is 25";
console.log(text.toUpperCase());                  // to convert the  characters in a string
console.log(text.toLocaleUpperCase()) */

// let a= 5; b= 10;      // operators
// console.log(a+b);
// console.log(a-b);    
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

/*let a=5;
let b= ++a;      // arithmetic operator

console.log(b); */

/*var a= 6;
console.log(--a); */

/* var a=5;
   var b= a++;    // post-fix increment

console.log(a);
console.log(b); */

/* var a= 4; b=5; c=3;
   console.log((a+b)*c);*/      //precedence

   /*let person= {name: 'Jerry', age:30,location:'tvm'};*/   // person is the object and values are inside the braces 

  // console.log(typeof(person));   // to see the data-type of person
  // console.log(person.name);      // to take a value from the object

/* let arr1= [23,55,37,'Messi'];     //array
//  console.log(typeof(arr1));      
console.log(arr1[2]);  */         // to call out a value from an array

/*  let obj= [{name: 'Jerry', age:30,location:'Trivandrum'},       // turning an object into array
    {name: 'John', age:27,location:'Kochi'}];

    console.log(obj[1].name); */

    // FUNCTION

    // function functionName(variable){ parameters};

  /*  function welcomeMessage(name){         // defining what the function should do
        console.log("Welcome " + name);
    }
    welcomeMessage("Neymar"); */

  /*  function add(b,c){
        console.log(b+c);
    }
    add(23,7);

    function add(a,b){
        let c= a+b;
        return c;
    }
    console.log("The sum is:" + add(17,25)); */

 /*   function foo() { 
        var a = 1; 
        if (a >= 1) { 
        let b = 2; 
        while (b < 5) { 
        let c = b * 2; 
        b++; 
        console.log( a + c ); 
        } 
        } 
        } 
        foo();    */

  /*  var a= 16, b=12;
    if(a==b){
        console.log("a equal to b");                  // if conditions // conditional statements
    }else if(a>b){
        console.log("a greater than b");
    }
        else{
        console.log("a not equal to b");
    }  */

 /* var x= 10, y=12;
 var result= x>y? "x Greater than y": "x Less than y";
 console.log(result);

 var x= 10, y=12, z=9;
 var result= x>y? "x Greater than y": x>z? "x greater than z": "x Less than z";
 console.log(result); */

 /* function grades(marks){
   if(marks<60){
    console.log("Grade:F");
   }
  else if(marks >= 60 && marks < 70){      // Obtaining the grade by seeing the mark
    console.log("Grade:P");
 } else if(marks >=70 && marks<80){
    console.log("Grade:C");
 }else if(marks >=80 && marks < 90){
    console.log("Grade:B");
}else{
    console.log("Grade: A");
}

 }
 grades(70); */

/* var a=12, b=15, c=10;
 if(a>c && b>c){
    console.log("c less than a & b");
 }else{
    console.log("c greater than a & b");
 }
 if(a!=b){
    console.log("a is not equal to b");
 }*/

 /*   var a= "42";
    var b= 42;
    console.log(a == b);
    console.log(a === b);  */


    // For loop
/* for(let i=0; i<=10; i++){
    console.log(i);
}*/

// While loop
/* let x= 0;
while(x<10){
    console.log(x);
    x++;
} */

// Do While

/* let r=1;
do{
    console.log(r);
    r++;
}while(r<7);  */
