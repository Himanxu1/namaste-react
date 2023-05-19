import React from "react";
import ReactDOM from 'react-dom/client'


//  react element
const heading = () => <h1>Hello React Developers</h1>

//  React Component
const Heading = () =>{
    return (
        <div>
            {heading()}
            <h1>Hello From Component</h1>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading/>)
