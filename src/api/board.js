import fetch from "../utils/customFetch";

const boardApi = {
  async getPizzas(data) {
    try {
      return await fetch({
        url: `/products/pizzas/?page=${data.page}&page_size=${data.count}&price_ordering=${data.price_ordering}`,
        method: "GET",
      });
    } catch (err) {
      if (err && err.response && err.response.data && err.response.data.detail) {
        throw Error(err.response.data.detail);
      }
      throw Error("Oops, something is wrong");
    }
  },

  async getSinglePizza(data) {
    try {
      return await fetch({
          url: `/products/pizza/${data}`,
          method: "GET",
        }
      )
    } catch (err) {
      throw err;
    }
  },

  async postOrderPizza(data) {
    try {
      return await fetch ( {
        url: "products/pizza/orders",
        method: "POST",
        data
      })
    } catch (err) {
      throw err;
    }
  }
};

export default boardApi;
