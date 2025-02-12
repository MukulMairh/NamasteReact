import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


//element, attributes , what message it is going to hold/ print 
// const heading = React.createElement("h1", { id: "heading" }, "Hello World From React "); //core
const root = ReactDOM.createRoot(document.getElementById("root")); //Dom lib




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