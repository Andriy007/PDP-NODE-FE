import * as types from "./boardActionsTypes";

export const initialState = {
  list: [],
  currentPage: 1,
  pages: -1,
};

const boardItems = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_ITEMS_SUCCESS: {
      return {
        list: action.response.products,
        currentPage: action.response.currentPage,
        pages: action.response.pages,
        numOfResults: action.response.numOfResults
      }
    }
    default:
      return state;
  }
};

export default boardItems;
