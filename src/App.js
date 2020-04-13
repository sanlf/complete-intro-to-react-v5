import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <div>
            <h1>Adopt me!</h1>
            <SearchParams name="Luna" animal="dog" breed="Havanese" />
            <SearchParams name="Pepper" animal="bird" breed="Cockatiel" />
            <SearchParams name="Doink" animal="cat" breed="Mix" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

