import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const pizzaPage = (e) => {
    history.push("/pizza");
  };
  return (
    <div className="homepage-wrapper">
      <h2>Order Pizza</h2>
      <p>choose you own pizza</p>
      <button className="pizza-button" onClick={pizzsPage}>
        pizza
      </button>
    </div>
  );
};
export default HomePage;
