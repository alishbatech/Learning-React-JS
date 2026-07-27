import React from "react";
// With JSX 
export const Card = () => {
    return (
        <div id="card" style={{ color: 'red', padding: 20 }}>
            <h2> Card with JSX</h2>
            <p>
                This is a <span id="highLight"> paragraph</span> with text.
            </p>
            <button>Click me</button>
        </div>
    );
}
// ******************************************
// React.createElement(
    //     element,
    //     attribute,
    //     children 
    //  )
// ******************************************  

    //  Without JSX
export const CardWithoutJSX = () => {
    return (
        React.createElement("div",
            { id: "card" },
            React.createElement("h2",
                null,
                "Card Without JSX"),
            React.createElement("p",
                null,
                "This is a",
                React.createElement("span",
                    { id: "highLight" },
                    " paragraph "),
                "with text."),
            React.createElement("button",
                null,
                "Click me")

        )
    );
}