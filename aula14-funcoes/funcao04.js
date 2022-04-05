
// //5! (lê-se: cinco fatorial) = 5 x 4 x 3 x 2 x 1
// //FATORIAL DE FORMA BASICA
// function fatorial(n) {
//     let fat = 1
//     for (let c = n; c > 1; c--) {
//         fat *= c
//     }
//     return fat
// }
//  console.log(fatorial(5))


// RECURSIVIDADE 
    
    /*
      5! = 5 x 4 x 3 x 2 x 1 
      n! -n x (n-l)!
      1! = 1
    */ 


function fatorial(n) { 
    if (n == 1){
        return 1 
    } else { 
        return n * fatorial(n-l)
    }
}

console.log(fatorial(5))