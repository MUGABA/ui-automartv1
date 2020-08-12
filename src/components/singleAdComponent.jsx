import React, { Component } from "react";

import { getSpecificCar } from "../services/demoData";
import Card from "./reUsableComponents/cardComponent";

class SingleAd extends Component {
  state = {
    id: 1,
  };

  car = getSpecificCar(this.state.id);
  //   async componentDidMount() {
  //     await getSpecificCar(this.state.id);
  //   }

  render() {
    const { imageUrl } = this.car;
    console.log(imageUrl);
    return (
      <div>
        <Card imageUrl={imageUrl} />
      </div>
    );
  }
}

export default SingleAd;
