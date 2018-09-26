import React, { Component } from "react";
import "./App.css";
import { Contacts } from "./components/Contacts";
import { Provider } from "./context";

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Contacts />
                </div>
            </Provider>
        );
    }
}

export default App;
