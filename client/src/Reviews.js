import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Review from './Review'

function Reviews({reviews, setReviews }) {

    const params = useParams()
    const {id} = params

    const [errors, setErrors] = useState(false)


    useEffect( () => {
      getReviews()
  },[])


       function getReviews() {
        fetch(`/coffees/${id}/reviews`)
        .then(res=> {
            if (res.ok) {
                res.json().then(reviews => setReviews(reviews))
            } else {
                res.json().then(data => setErrors(data.error))
            }
            
        })
    }
    
      console.log(reviews)
        
       const reviewsList = reviews.map(review => <Review key={review.id} review={review}/>)
          // if(errors) return <h1>{errors}</h1>
//   return (
  return (
    <>
    <h1>Reviews</h1>
    <div>{reviewsList}</div>
    </>
  )
}

export default Reviews