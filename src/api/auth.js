import fetch from "../utils/customFetch";

const auth = {
  async login(data) {
    try {
      const result = await fetch({
        url: "/users/login",
        method: "POST",
        data
      });

      localStorage.setItem("token", JSON.stringify(result));

      return result;
    } catch (error) {

      throw error;
    }
  },

  async signUp(data) {
    try {
      await fetch({
        url: "/users/register",
        method: "POST",
        data
      });
    } catch (error) {
     throw error
    }
  }
};

export default auth;
