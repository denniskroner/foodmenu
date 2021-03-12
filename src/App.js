import React, { Component } from "react";
import Auxiliary from "./hoc/auxiliary";

import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    foodmenu: [],
  };

  componentDidMount() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        console.log(response);
        const foodmenu = response.data.categories;
        console.log(foodmenu);
        this.setState({ foodmenu: foodmenu });
      });
  }

  render() {
    return (
      <Auxiliary>
        <p>test</p>
      </Auxiliary>
    );
  }
}

export default App;
