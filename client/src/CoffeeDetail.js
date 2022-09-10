import { Link, useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

function CoffeeDetail({ deleteCoffee }) {
  const [coffee, setCoffee] = useState({});
  const [coffeeReviews, setCoffeeReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`/coffees/${params.id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCoffee(data);
          setLoading(false);
        });
      } else {
        console.log("error");
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  function handleDelete() {
    fetch(`/coffees/${params.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        deleteCoffee(id);
        history.push("/");
      } else {
        res
          .json()
          .then((data) =>
            setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
      }
    });
  }

  useEffect(() => {
    fetch(`/coffees/${params.id}/get_reviews`).then((res) => {
      if (res.ok) {
        res.json().then((coffeeReviews) => setCoffeeReviews(coffeeReviews));
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  const allCoffeeReviews = coffeeReviews.map((review) => (
    <Review key={review.id} review={review} />
  ));
  console.log(coffeeReviews);
  if (errors) return <h1>{errors}</h1>;
  if (loading) return <h1>Loading</h1>;

  const { id, name, brand, price } = coffee;
  return (
    <>
      <h1 className="coffee-detail-title">{name}</h1>
      <div className="coffee-detail">
        <div>
          <h3>Brand:</h3>
          <p>{brand}</p>
          <h3>Price:</h3>
          <p>{price}</p>
        </div>
      </div>
      <div className="edit-delete-buttons">
        <button>
          <Link to={`/coffees/${id}/edit`}>Edit Coffee</Link>
        </button>
        <button onClick={handleDelete}> Delete Coffee</button>
      </div>

      <ReviewForm
        coffeeId={params.id}
        coffeeReviews={coffeeReviews}
        setCoffeeReviews={setCoffeeReviews}
      />
      <div>{allCoffeeReviews}</div>
    </>
  );
}
export default CoffeeDetail;
