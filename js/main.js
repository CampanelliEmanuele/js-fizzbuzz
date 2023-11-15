
/*
for x in 1 to 100
    
    if x divisibile per 3
        stampa Fizz
    
    if x divisibile per 5
        stampa Bizz

    else
        stampa x
*/

// Si scorrono i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }

    else if (i % 3 == 0 || i % 5 == 0) {
        if (i % 3 == 0) {   // Se i e' divisibile per 3
            console.log("Fizz")
        }
        if (i % 5 == 0) {   // Se i e' divisibile per 5
            console.log("Buzz")
        }
    }
    
    else {
        console.log(i)
    }

}

