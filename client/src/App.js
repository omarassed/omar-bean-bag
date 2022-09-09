// client/src/components/App.js
import { Route, Switch, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import CoffeeForm from "./CoffeeForm";
import EditCoffeeForm from "./EditCoffeeForm";
import CoffeeDetail from "./CoffeeDetail";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./Signup";
import UserPage from "./UserPage";
import Review from "./Review";

function App() {
  const [coffees, setCoffees] = useState([]);
  const [errors, setErrors] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  const params = useParams();
  const { id } = params;
  // console.log(params)

  // useEffect(() => {
  //   fetchReviews()
  // }, [])

  useEffect(() => {
    fetchCoffees();
    // fetchReviews()
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  const fetchCoffees = () => {
    fetch("/coffees").then((res) => {
      if (res.ok) {
        res.json().then((coffees) => setCoffees(coffees));
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  };
  // const fetchReviews = () => {
  //   fetch(`/coffees/${id}/get_reviews`).then((res) => {
  //     if (res.ok) {
  //       res.json().then((reviews) => setReviews(reviews));
  //     } else {
  //       res.json().then((data) => setErrors(data.error));
  //     }
  //   });
  // };

  // useEffect(() => {
  //   getReviews();
  // }, []);

  // function getReviews() {
  //   fetch(`/reviews`).then((res) => {
  //     if (res.ok) {
  //       res.json().then((reviews) => setReviews(reviews));
  //     } else {
  //       res.json().then((data) => setErrors(data.error));
  //     }
  //   });
  // }

  const addCoffee = (coffee) => setCoffees((current) => [...current, coffee]);

  const updateCoffee = (updatedCoffee) =>
    setCoffees((current) => {
      return current.map((coffee) => {
        if (coffee.id === updatedCoffee.id) {
          return updatedCoffee;
        } else {
          return coffee;
        }
      });
    });
  const deleteCoffee = (id) =>
    setCoffees((current) => current.filter((c) => c.id !== id));

  const updateUser = (user) => setCurrentUser(user);

  if (errors) return <h1>{errors}</h1>;

  return (
    <>
      <NavBar currentUser={currentUser} updateUser={updateUser} />
      <Switch>
        <Route path="/coffees/new">
          <CoffeeForm addCoffee={addCoffee} />
        </Route>

        <Route path="/coffees/:id/edit">
          <EditCoffeeForm updateCoffee={updateCoffee} />
        </Route>

        <Route path="/coffees/:id">
          <CoffeeDetail deleteCoffee={deleteCoffee} user={currentUser} />
        </Route>

        <Route path="/users/new">
          <SignUp updateUser={updateUser} />
        </Route>

        <Route path="/users/:id">
          <UserPage />
        </Route>

        <Route path="/login">
          <Login updateUser={updateUser} />
        </Route>

        <Route exact path="/">
          <Home coffees={coffees} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
