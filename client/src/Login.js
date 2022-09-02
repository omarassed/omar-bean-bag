import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import React from 'react'

function Login({ updateUser }) {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {username, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        // Logs in user
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                console.log(res)
                res.json().then(user => {
                    updateUser(user)
                    localStorage.setItem("currentUser", JSON.stringify(user))
                    history.push(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
  return (
    <> 
    <form onSubmit={onSubmit}>
    <label>
      Username
      </label>
    <input type='text' name='username' value={username} onChange={handleChange} />
  
    <label>
     Password
     </label>
    <input type='password' name='password' value={password} onChange={handleChange} />
   
   
    <input type='submit' value='Log in!' />

  {errors? <div>{errors}</div>:null}
  </form>
    </>
  )
}

export default Login