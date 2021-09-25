console.log ('Welcome to the password validator tool!')

const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

reader.question('What password would you like to enter?', function(password){
    String(password)
    if (password.length >= 10){
        console.log ('It was a success!')
        reader.close()
    } else {
        console.log ('You have failed!')
        reader.close()
    }
})




