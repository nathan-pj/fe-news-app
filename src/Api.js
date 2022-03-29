const { default: axios } = require("axios");

const apiCall = axios.create({
  baseURL: `https://news-app-npj.herokuapp.com/api/`,
});
module.exports = apiCall;
