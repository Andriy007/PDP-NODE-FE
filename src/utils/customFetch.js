import axios from "axios";
import { API_URL } from "../constants/apiConstant";

const client = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" }
});

const request = function(options) {

  const onSuccess = function(response) {

    return response.data;
  };
  const onError = function(error) {

    if (error && error.response && error.response.data) return Promise.reject(error.response.data);
    return Promise.reject(error.response.data);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
