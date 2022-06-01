import React, { useState } from 'react'
import axios from 'axios'

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
        console.log(formData)
        axios.get('https://raw.githubusercontent.com/syook/react-dishpoll/main/users.json')
            .then(response => {
                console.log(response.data)
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
        <div>
            <h3> Please Login </h3>    
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='username' name="username" value={username} onChange={handleChange} /> <br />
                <input type="text" placeholder='password' name="pass" value={pass} onChange={handleChange} /> <br />
                <input type="submit" value="login" />
            </form>
        </div>
    );
}

export default Login