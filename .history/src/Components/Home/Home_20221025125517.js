import React from "react";

const Home = (props) => {
    console.log("props:", props);
    return (
        <>
            <h1> Home Component </h1>
            <p> Price $4000 </p>
            <button onClick={() => 
                {props.addToCardHandler({price:1000, name:'iphone_11'})}
            }> Add to Cart </button>
            <button onClick={() => 
                {props.removeFromCardHandler()}
            }> Remove to Cart </button>            
        </>
    )
}

export default Home;