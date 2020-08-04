import React, { Component } from "react";

import "./App.css";
import CardComponent from "./CardComponent/CardComponent";

class App extends Component {
  state = {
    Person: [],
    PersonChanger: false,
  };

  handlerFunc = () => {
    this.setState({
      Person: [
        ...this.state.Person,
        { name: this.state.name, email: this.state.email },
      ],
    });
  };

  handlerChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div className="App">
        <div className="inputpanel">
          <h2>Enter Details</h2>
          <input
            name="name"
            onChange={(event) => this.handlerChange(event)}
            className="inputbox"
            placeholder="enter name"
          ></input>
          <input
            name="email"
            onChange={(event) => this.handlerChange(event)}
            className="inputbox"
            placeholder="enter email"
          ></input>
        </div>
        <button onClick={this.handlerFunc}>Press it</button>
        {this.state.Person.map((elem) => {
          return (
            <center>
              <CardComponent
                name={elem.name}
                email={elem.email}
              ></CardComponent>
            </center>
          );
        })}
      </div>
    );
  }
}

export default App;
