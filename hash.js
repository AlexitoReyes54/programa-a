let s = "my name is Alex"
//console.log(s.charCodeAt(5));

function hashing(s = "") {
    let g = 31
    let hash = 0;
    for (let index = 0; index < s.length; index++) {
        hash += g * hash + s.charCodeAt(index) 
    }
    return hash;
}


console.log( hashing("hello") );
console.log( hashing("bay") );
console.log( hashing("awesome") );