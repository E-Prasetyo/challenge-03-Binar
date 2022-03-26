/* eslint-disable import/prefer-default-export */
import { Car } from '../assets/data/data';

// eslint-disable-next-line prefer-const
let data = Car;

export const serviceGetCar = () => {
  const result = (data !== undefined) ? data : [];
  return result;
};

export const serviceAddCar = (name, price) => {
  console.log('name', name, 'price', price);
  const idNew = data.length + 1;
  const newCar = {
    id: idNew,
    username: `${name}${idNew}`,
    type: `type9${idNew}`,
    Car: `${name}${idNew}`,
    startRent: `Start Rent9${idNew}`,
    finishRent: `Finish Rent9${idNew}`,
    price: `${price}`,
    status: `Status9${idNew}`,
  };
  const result = data.push(newCar);
  return result !== undefined;
};

export const serviceDeleteCar = (id) => {
  let result;
  const idIndex = data.find((value) => value.id === id);
  if (idIndex !== undefined) {
    const newData = data.filter((value) => value.id !== id);
    data = newData;
    result = true;
  } else {
    result = false;
  }
  return result;
};
