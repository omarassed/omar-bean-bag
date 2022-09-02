import  { Link, useParams, useHistory } from 'react-router-dom'
import {useEffect, useState} from 'react'

function CoffeeDetail({ deleteCoffee }) {
    const [coffee, setCoffee] = useState({})
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    
    const params = useParams()
    const history = useHistory()
    console.log(params.id)
    useEffect(()=>{
      fetch(`/coffees/${params.id}`)
      .then(res => { 
        if(res.ok){
          res.json().then(data => {
            setCoffee(data)
            setLoading(false)
          })
        } else {
          console.log('error')
          res.json().then(data => setErrors(data.error))
        }
      })
    },[])
    function handleDelete(){
      fetch(`/coffees/${params.id}`, {
        method:'DELETE',
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => {
        if(res.ok){
          deleteCoffee(id)
          history.push('/')
        } else {
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })
    }
  
    // const handleReview = () => {
    //   fetch(`/reviews`,{
    //     method:'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body:JSON.stringify(/reviews)
    //   })
    //   .then(res => {
    //     if(res.ok){
    //       history.push('/users/1')}
    //   })
    // }
  
    
    
  
    if(errors) return <h1>{errors}</h1>
    if(loading) return <h1>Loading</h1>
  
    const {id, name, brand, price} = coffee
    return (
        <>
          <h1>{name}</h1>
            <div className='wrapper'>
              <div>
                <h3>Brand:</h3>
                <p>{brand}</p>
                <h3>Price:</h3>
                <p>{price}</p>
              </div>
            </div>
        <button><Link to={`/coffees/${id}/edit`}>Edit Coffee</Link></button>
        <button onClick={handleDelete}>Delete Coffee</button>
        {/* <button onClick={handleReview} >See Reviews</button> */}
        </>
      )
}
export default CoffeeDetail