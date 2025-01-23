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
//For inline styling
const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestrauntCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-image-container">
                {/* Here goes image */}
                <img className="res-logo" alt="res-logo" src="https://w7.pngwing.com/pngs/524/137/png-transparent-restaurant-logo-illustration-gluten-free-diet-logo-celiac-disease-wheat-restaurant-logo-emblem-food-free-logo-design-template.png"></img>
            </div>
            <div className="res-name">
                <h3>Meghna Foods</h3>
            </div>
            <h4>Biryani, Nort India, Asian </h4>
            <h4>4.4 stars</h4>
            <h4>38 mins</h4>

        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* Here goes many restraunt cards */}
                <RestrauntCard />
            </div>
        </div>

    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


// console.log(heading);
// root.render(heading);//To render it on browser

// console.log(parent);

root.render(<AppLayout />);//To render it on browser