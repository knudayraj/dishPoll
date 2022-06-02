import React, { useState } from 'react'
// import axios from 'axios'
import axios from './config/axios'

function Login(props) {
    const { handleLoggedin } = props
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        const inputValue = e.target.value
        if(e.target.name == "username"){
            setUsername(inputValue)
        }else if(e.target.name == "pass"){
            setPass(inputValue)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username,
            pass
        }
        // console.log(formData)
        axios.get('/users.json')
            .then(response => {
                // console.log(response.data)
                const users = response.data
                const result = users.find(ele => {
                    return ele.username == username && ele.password == pass
                })
                if(result){
                    // console.log('logged In')
                    alert('Successfully Logged In')
                    localStorage.setItem('login', username)
                    handleLoggedin()
                    props.history.push('/')
                } else {
                    alert('Invalid Credentials')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className='container mt-5'>
            <h3> Please Login </h3>    
            <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder='username' name="username" value={username} onChange={handleChange}  />
            <label>UserName</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder='password' name="pass" value={pass} onChange={handleChange} />
            <label>Password</label>
            </div>
                <input className='btn-success mt-2' style={{borderRadius : "5px"}} type="submit" value="login" />
            </form>
        </div>
    );
}

export default Login