import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavCoffeeCard from "./FavCoffeeCard";

function UserPage() {
  const [user, setUser] = useState();
  const [favCoffees, setFavCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetch(`/users/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setLoading(false);
        });
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  useEffect(() => {
    getFavorites();
  }, []);

  function getFavorites() {
    fetch(`/users/${id}/favorite_coffees`).then((res) => {
      if (res.ok) {
        res.json().then((favCoffees) => setFavCoffees(favCoffees));
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }
  const favCoffeeList = favCoffees.map((favCoffee) => (
    <FavCoffeeCard key={favCoffee.id} favCoffee={favCoffee} />
  ));

  if (loading) return <h1>Loading</h1>;
  if (errors) return <h1>{errors}</h1>;
  return (
    <div>
      <h1>{user.username}</h1>
      <h3>My Favorite Coffees</h3>
      <ul>{favCoffeeList}</ul>
    </div>
  );
}

export default UserPage;
