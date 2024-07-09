import axios from 'axios'

const BACKEND_DOMAIN='http://127.0.0.1:8000'


// http://127.0.0.1:8000/api/v1/auth/users/
const REGISTER_URL=`${BACKEND_DOMAIN}/api/v1/auth/users/`
const ACTIVATE_URL=`${BACKEND_DOMAIN}/api/v1/auth/users/activation/`
const LOGIN_URL=`${BACKEND_DOMAIN}/api/v1/auth/jwt/create/`
const RESET_PASSWORD_URL=`${BACKEND_DOMAIN}/api/v1/auth/users/reset_password/`
const RESET_PASSWORD_CONFIRM_URL=`${BACKEND_DOMAIN}/api/v1/auth/users/reset_password_confirm/`


// register user
const register= async (userData)=>{
    console.log(userData)
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const response= await axios.post(REGISTER_URL,userData,config)
    return response.data
    
}

// login user
const login= async (userData)=>{
    console.log(userData)
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const response= await axios.post(LOGIN_URL,userData,config)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
    
}

// logout user
const logout=()=>{
    return localStorage.removeItem('user')
}

// activate user
const activate= async (userData)=>{
    console.log(userData)
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const response= await axios.post(ACTIVATE_URL,userData,config)
    return response.data
    
}
// reset password
const resetPassword= async (userData)=>{
    console.log(userData)
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const response= await axios.post(RESET_PASSWORD_URL,userData,config)
    return response.data
    
}

// reset confirmed password
const resetPasswordConfirm= async (userData)=>{
    console.log(userData)
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const response= await axios.post(RESET_PASSWORD_CONFIRM_URL,userData,config)
    return response.data
    
}

const authService={register,login,logout,activate,resetPassword,resetPasswordConfirm}

export default authService