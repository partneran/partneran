var jwt_decode = require('jwt-decode');

const Auth = {
    authenticateUser(data) {
        if (data.status === 'error') console.log('No account', data)
        Auth.deauthenticateUser()
        console.log(data)
        localStorage.setItem('token', data.data.token)
    },

    deauthenticateUser() {
        localStorage.removeItem('token')
    },

    getToken() {
        return localStorage.getItem('token')
    },

    getUser() {
        let token = Auth.getToken()
        if(!token) return {}
        else {
            return jwt_decode(token)
        }
    },

    setToken(newtoken) {
      localStorage.setItem('token', newtoken)
    }

}

export default Auth
