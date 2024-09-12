//element, attributes , what message it is going to hold/ print 
const heading = React.createElement("h1", { id: "heading" }, "Hello World From React "); //core
const root = ReactDOM.createRoot(document.getElementById("root")); //Dom lib

//this will return you an object. This will not return you an element. 
//React create element will return you an object not element. 
//look at console, you will the type of element created, also props. 
//Props part, id = heading, children : "Hello World From React"





/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 * </div>
 */

//How to make same structure in react 
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, React.createElement("h1", {}, "I am h1 tag"))
);

console.log(heading);
root.render(heading);//To render it on browser

console.log(parent);
root.render(parent);//To render it on browser