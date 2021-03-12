import React, { Component } from "react";
import Auxiliary from "./hoc/auxiliary";
import Foodmenu from "./containers/foodmenu/foodmenu";

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
        const foodmenu = response.data.categories.slice(0,1);
        this.setState({ foodmenu: foodmenu });

        console.log(foodmenu);
      });
  }

  render() {
    let foodmenu = null;
    if (this.state.foodmenu.length > 0) {
      foodmenu = this.state.foodmenu.map((food) => {
        return (
          <Foodmenu
            key={food.idCategory}
            idCategory={food.idCategory}
            category={food.strCategory}
            description={food.strCategoryDescription}
            img={food.strCategoryThumb}
          />
        );
      });
    }

    return <Auxiliary>{foodmenu}</Auxiliary>;
  }
}

export default App;
