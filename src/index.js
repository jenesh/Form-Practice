import React, { Component } from "react";
import ReactDOM from "react-dom";

import LabeledInput from "./labeledInput";
import LabeledSelect from "./labeledSelect";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      age: 21,
      gender: "",
      location: "",
      vegetarian: false,
      kosher: false,
      lactoseFree: false
    };
  }
  handleChange = e => {
    const { value, name, checked, type } = e.target;
    console.log(checked);
    console.log(value);
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : type === "number"
      ? this.setState({
          [name]: parseInt(value, 10)
        })
      : this.setState({
          [name]: value
        });
  };
  handleSubmit = e => {
    e.preventDefault()
    window.alert(JSON.stringify(this.state))
  }
  render() {
    const {
      firstname,
      lastname,
      age,
      gender,
      location,
      vegetarian,
      kosher,
      lactoseFree
    } = this.state;
    console.log(this.state);

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <LabeledInput
            type="text"
            label="First Name"
            name="firstname"
            value={firstname}
            handleChange={this.handleChange}
          />
          <br />
          <LabeledInput
            type="text"
            label="Last Name"
            name="lastname"
            value={lastname}
            handleChange={this.handleChange}
          />
          <br />
          <LabeledInput
            type="number"
            label="Age"
            name="age"
            value={age}
            handleChange={this.handleChange}
          />
          <LabeledInput
            type="radio"
            label="Male"
            name="gender"
            value="male"
            checked={gender === "male"}
            handleChange={this.handleChange}
          />
          <LabeledInput
            type="radio"
            label="Female"
            name="gender"
            value="female"
            checked={gender === "female"}
            handleChange={this.handleChange}
          />
          <br />
          <LabeledSelect
            label="Location"
            name="location"
            value={location}
            options={[
              { state: "New York" },
              { state: "California" },
              { state: "Texas" }
            ]}
            handleChange={this.handleChange}
          />
          <br />
          <LabeledInput
            type="checkbox"
            label="Vegetarian"
            name="vegetarian"
            checked={vegetarian}
            handleChange={this.handleChange}
          />
          <br />
          <LabeledInput
            type="checkbox"
            label="Kosher"
            name="kosher"
            checked={kosher}
            handleChange={this.handleChange}
          />
          <br />
          <LabeledInput
            type="checkbox"
            label="Lactose Free"
            name="lactoseFree"
            checked={lactoseFree}
            handleChange={this.handleChange}
          />
          <br/>
          <button>Submit</button>
        </form>
        
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
