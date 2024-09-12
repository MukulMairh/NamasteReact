import React from "react";
import ReactDOM from "react-dom/client"

//element, attributes , what message it is going to hold/ print 
// const heading = React.createElement("h1", { id: "heading" }, "Hello World From React "); //core
const root = ReactDOM.createRoot(document.getElementById("root")); //Dom lib

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://w7.pngwing.com/pngs/524/137/png-transparent-restaurant-logo-illustration-gluten-free-diet-logo-celiac-disease-wheat-restaurant-logo-emblem-food-free-logo-design-template.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    )
}


// console.log(heading);
// root.render(heading);//To render it on browser

// console.log(parent);

root.render(<AppLayout />);//To render it on browser