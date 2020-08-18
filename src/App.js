import React, { Component } from "react";
import InputDetails from "./InputDetails/InputDetails";
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
        { name: this.state.name, age: this.state.age },
      ],
    });
    this.setState({ val: "" });
  };

  handlerChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <InputDetails
          clicked={this.handlerFunc}
          changed={(event) => this.handlerChange(event)}
          val={this.state.val}
        ></InputDetails>
        {this.state.Person.map((elem) => {
          return (
            <center>
              <CardComponent name={elem.name} age={elem.age}></CardComponent>
            </center>
          );
        })}
      </div>
    );
  }
}

export default App;
