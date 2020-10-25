import axios from 'axios'

const API_URL = window.API_URL

class AuthService {

    constructor() {
        this.token = localStorage.getItem('token')
    }

    authHeader() {
        if (this.token) {
            return { Authorization: 'Bearer ' + this.token }
        } else {
            return {}
        }
    }
    /**
     * send post request to user login endpoint
     * 
     * if success, set JWT to local storage
     * 
     * @param {*} email 
     * @param {*} password 
     * 
     * @return Promise
     */
    login(email, password) {
        return axios.post('http://localhost/api/auth' + '/login', { email, password })
    }

    /**
     * Log the user out by deleting user item in local storage
     * 
     * @return void
     */
    logout() {
        localStorage.removeItem("user")
    }

    /**
     * Get the user using JWT
     * 
     * @return Promise
     */
    getUser() {
        return axios.post('http://localhost/api/auth', { headers: this.token })
    }

    /**
     * Refresh token
     * 
     * @return Promise
     */
    refresh() {
        return axios.post('http://localhost/api/auth/refresh', {}, { headers: this.authHeader() })
    }
}

export default AuthService