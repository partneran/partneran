// export const verifyEmail = (emai) => {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if(re.test(email)) {
//         return email
//     }
//     return console.log('email is wrong')
// }

export const verifyPassword = (password, passwordConfirmation) => {
    if(password !== passwordConfirmation) {
        return false
    }
    return true;
}