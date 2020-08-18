import React, { Component } from "react";
import InputDetails from "./InputDetails/InputDetails";
import "./App.css";
import CardComponent from "./CardComponent/CardComponent";

class App extends Component {
  state = {
    Person: [],
    PersonChanger: false,
    input: null,
  };
  handlerFunc = () => {
    this.setState({
      Person: [
        ...this.state.Person,
        { name: this.state.name, age: this.state.age },
      ],
    });
  };

  handlerChange = (event) => {
    console.log("ON CAHNGE");
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <InputDetails
          clicked={this.handlerFunc.bind(this)}
          changed={(event) => this.handlerChange(event)}
          val={null}
        ></InputDetails>
        <div className="card-container">
          <div className="cards">
            {this.state.Person.map((elem) => {
              return (
                <center>
                  <CardComponent
                    key={elem}
                    name={elem.name}
                    age={elem.age}
                  ></CardComponent>
                </center>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
