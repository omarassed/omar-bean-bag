import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function Reviews() {
    const params = useParams()
    const {id} = params
    console.log("i")

    const [reviews, setReviews] = useState([])
    const [errors, setErrors] = useState(false)
    useEffect(() => {
        fetchReviews()
      }, [])
    
      const fetchReviews = () => {
        fetch(`coffees/${id}/reviews`)
        .then(res => {
          if (res.ok){
            res.json().then(reviews => setReviews(reviews))
          } else {
            res.json().then(data => setErrors(data.error))
          }
            })
          }
          console.log(reviews)
          if(errors) return <h1>{errors}</h1>
  return (
    <div>{reviews}</div>
  )
}

export default Reviews