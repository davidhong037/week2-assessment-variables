function greeting(name){
    name: String(name)
    console.log (`Welcome ${name} to the password validator tool!`)
}

function greaterThanTen (password){
    const info = {
    password: String(password)
    }
    
    if (password.length >= 10){
        return 'Success!'
    } else {
        return 'Failure!'
    }
}

greeting('David')
greaterThanTen('hello12345')
// console.log (greaterThanTen())