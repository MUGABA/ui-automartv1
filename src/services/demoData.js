let data = [
  {
    id: 1,
    state: "new",
    price: 1200000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "benz1.jpg",
  },
  {
    id: 2,
    state: "new",
    price: 35000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "backLights.jpg",
  },
  {
    id: 3,
    state: "new",
    price: 78000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "benzBlack.jpg",
  },

  {
    id: 4,
    state: "new",
    price: 67000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "blackPoshe1.jpg",
  },
  {
    id: 5,
    state: "new",
    price: 465000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "blacksedan1.jpg",
  },
  {
    id: 6,
    state: "new",
    price: 646000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "blue1.jpg",
  },
  {
    id: 7,
    state: "new",
    price: 23000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "blueAgain.jpg",
  },
  {
    id: 8,
    state: "new",
    price: 12000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "blueLights.jpg",
  },
  {
    id: 9,
    state: "new",
    price: 40000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "bugatiWhite.jpg",
  },
  {
    id: 10,
    state: "new",
    price: 120000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "feraliCar.jpg",
  },
  {
    id: 11,
    state: "new",
    price: 121000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "ford.jpg",
  },
  {
    id: 12,
    state: "new",
    price: 12000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "fostaYellow.jpg",
  },
  {
    id: 13,
    state: "new",
    price: 124000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "gta1.jpg",
  },
  {
    id: 14,
    state: "used",
    price: 238000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "oldieColored.jpg",
  },
  {
    id: 15,
    state: "new",
    price: 237000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "oldieYellow.jpg",
  },
  {
    id: 16,
    state: "used",
    price: 123000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "oldModel.jpg",
  },
  {
    id: 17,
    state: "new",
    price: 91000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "race11.jpg",
  },
  {
    id: 18,
    state: "new",
    price: 541000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "raceCar.jpg",
  },
  {
    id: 19,
    state: "used",
    price: 1345000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "red1.jpg",
  },
  {
    id: 20,
    state: "used",
    price: 134000000,
    manufacturer: "benz",
    model: "tw2334",
    body_type: "truck",
    imageUrl: "redBugati.jpg",
  },
];

function getAllCarAds() {
  if (data.length === 0) return "No car ads yet";
  return data;
}

export function getSpecificCar(carId) {
  if (data.length === 0) return "Car Ad of that id is not found";
  for (let k of data) {
    const { id } = k;
    if (id === carId) return k;
  }
  return "Car Ad of that id is not found";
}

function deleteCarAd(carId) {
  if (!data.length) return "Car Ad of that id is not found";

  for (let k = 0; k < data.length; k++) {
    let car = data[k];
    const { id } = car;
    if (id === carId) {
      data.splice(k, 1);
      return "Car Ad deleted successfully";
    }
  }
  return "Car Ad of that id is not found";
}
function addCarAd(rowData) {
  const car = {
    id: data.length + 1,
    state: rowData.state,
    price: rowData.price,
    manufacturer: rowData.manufacturer,
    model: rowData.model,
    body_type: rowData.body_type,
    imageUrl: rowData.imageUrl,
  };
  data.push(car);
  return "car Ad created successfully";
}

// console.log(getSpecificCar(2));
// console.log(deleteCarAd(2));

export default {
  getAllCarAds,
  getSpecificCar,
  deleteCarAd,
  addCarAd,
};
