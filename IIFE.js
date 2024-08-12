// IMMEDIATILY INVOKED FUNCTION EXPRESSION (IIFE)

(function(){
    console.log("DB Connected!");
})();

// ()();

// Global scope ke polution se problem hoti hai kai baar toh usko hatane ke liye 
// IIFE ka use kiya jata

(()=>{
    console.log(`DB connected two!`);
})();

// YOU SHOULD ALWAYS USE ; AFTER USING IIFE

( (name)=>{
    console.log(`DB connected two! ${name}`);
} )('Tanishq');

