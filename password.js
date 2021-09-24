function greaterThanTen (password){
    const passsword = {
        password: String(password)
    }

    if (password.length >= 10){
        return 'Success!'
    } else {
        return 'Failure!'
    }
}

console.log (greaterThanTen('hello12345'))