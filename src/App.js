import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Contacts } from "./components/Contacts";
import { AddContact } from "./components/AddContact";
import About from "./components/About";
import NotFound from "./components/NotFound";
import { Provider } from "./context";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header text="Kontakty" />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts} />
                                <Route
                                    exact
                                    path="/contact/add"
                                    component={AddContact}
                                />
                                <Route exact path="/about" component={About} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
