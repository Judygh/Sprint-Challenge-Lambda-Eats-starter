import React from 'react';
import { useHistory } from "react-router-dom";

const HomePage = () =>{
    const history = useHistory();
    const pizzaPage = e =>{
        history.push("/pizza");
    }
    return(
    <div className="homepage-wrapper">
        <h2>Do you want Pizza?</h2>
    <p>choose your own pizzaaaaa</p>
    <button className="pizza-button" onClick={pizzaPage}>Order</button>
    </div>
    )
}

export default HomePage;
