import React from "react";

// function FunctionalGreeding() {
//     return <h1>Hello from react!</h1>
// }

const FunctionalGreedingWithProps = (props) => {
    return <h1>Hello, {props.name}! I see you're {props.age} years old; {props.greeding}</h1>;
}
export default FunctionalGreedingWithProps;