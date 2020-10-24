import axios from 'axios'

const API_URL = window.API_URL

class AuthService
{
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
    login(email, password){
        return axios.post('http://localhost/api/auth/' + 'login', {email, password})
    }

    /**
     * Log the user out by deleting user item in local storage
     * 
     * @return void
     */
    logout(){
        localStorage.removeItem("user")
    }
}

export default AuthService