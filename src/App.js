import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputComp from "./InputDetails/InputDetails";
import CardComponent from "./CardComponent/CardComponent";
import card from "./cssstyle.css";

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
    const card = {
      width: "fit-content",
      margin: "auto",
      border: "2px solid blue",
      backgroundColor: "#eee",
    };

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
            <CardComponent
              style={card}
              name={elem.name}
              email={elem.email}
            ></CardComponent>
          );
        })}
      </div>
    );
  }
}

export default App;
