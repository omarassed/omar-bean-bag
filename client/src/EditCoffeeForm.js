import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function EditCoffeeForm({ updateCoffee }) {
    const [formData, setFormData] = useState({
        name:'',
        brand:'',
        price:'',
      })
      const [errors, setErrors] = useState([])
      const {id} = useParams()
      useEffect(() => {
        fetch(`/coffees/${id}`)
        .then(res => res.json())
        .then(setFormData)
      },[])
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
    
      function onSubmit(e){
        e.preventDefault()
        //PATCH to `/coffees/${id}/reviews`
        fetch(`/coffees/${id}`,{
          method:'PATCH',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(formData)
        })
        .then(res => {
          if(res.ok){
            res.json().then(updateCoffee)
          } else {
            //Display errors
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
      }
        return (
          <div className='App'>
          {errors?errors.map(e => <div>{e}</div>):null}
          <form onSubmit={onSubmit}>
            <label>Name </label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} />
            
            <label> Brand</label>
            <input type='text' name='brand' value={formData.brand} onChange={handleChange} />
          
            <label>Price</label>
            <input type='number' name='price' value={formData.price} onChange={handleChange} />
        
            <input type='submit' value='Update Coffee' />
          </form>
          {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
          </div>
        )
      }


export default EditCoffeeForm