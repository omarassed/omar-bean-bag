import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function UserPage() {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    const params = useParams()
    const {id} = params
    console.log(id)
    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)
                    setLoading(false)
                
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
       
    },[])

    // useEffect( () => 
    //     fetch(`/users/${id}/favorite_coffees`)
    // )


    // function getFavorites() {
    //     fetch(`/users/${id}/favorite_coffees`)
    //     .then(res=> {
    //         res.json().then(fav_coffee =)
    //     })
    // }

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    return (
        <div>
            <h1>{user.username}</h1>
            <h3>My Coffees</h3>
            <button>
                Show Favorites
            </button>
        </div>
    )
}


export default UserPage