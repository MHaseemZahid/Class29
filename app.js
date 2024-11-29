//ask % to display grade
  
// var ask_per = +prompt("Enter Your Percentage" ,90);

//   if (ask_per>85) {
//     console.log("Your Grade is A+")
// } 

// else if (ask_per>75) {
//     console.log("Your Grade is A")
// } 


// else if (ask_per>65) {
//     console.log("Your Grade is B")
// } 


// else if (ask_per>55) {
//     console.log("Your Grade is C")
// } 


// else if (ask_per>45) {
//     console.log("Your Grade is D")
// } 


// else {  console.log("You are fail")
    
// }



// 
//var ask_num_to_dis ;

// var ret_val;

// function fun_ask_num_to_dis(ask_num_to_dis) {
    
//     if (ask_num_to_dis>0) {
//        ret_val="Positive  value";
//        }
//     else {   
// if (ask_num_to_dis===0) {
//             ret_val="Zero  value";
//            }
// else  {
//             ret_val="Negaitve  value";
//            }
     


//     }

//     return (ret_val);
    
// }


// ;
// var fun_val=+prompt("Enter Your number" );

// var fun_ret_val = fun_ask_num_to_dis(fun_val);
// console.log( fun_ret_val);

// logical operators
// and &&
// or ||

// and operators

// var v_age =+prompt("Enter Your Age" );


// if (v_age>=18 && v_age<=25){
//     console.log('if clo');
// }
// else{console.log('else clo');}




// or operators
// var v_age =+prompt("Enter Your Age" );
// var v_pass =prompt("Enter Your Pass" );


// if (v_age>=18 || v_pass<="yes"){
//     console.log('eligible');
// }
// else{console.log('not eligible');}


//age classes

var v_age =+prompt("Enter Your Age" );
if (v_age<13) {
    console.log("Child");
} 
else if (v_age>13 && v_age<19) {
    console.log("Teenager");
}
else if (v_age>19 && v_age<60) {
    console.log("Adult");
}
else {
console.log("Senior citizen" );
 
}


//cerate a calculator