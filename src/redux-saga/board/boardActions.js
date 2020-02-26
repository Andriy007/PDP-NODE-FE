import * as types from "./boardActionsTypes";

export const fetchItemsRequest = data => {
  return { type: types.GET_ALL_ITEMS, data };
};

export const OrderPizza = data => {
  console.log(data)
  return { type: types.ORDER_PIZZA_REQUEST, data}
};
