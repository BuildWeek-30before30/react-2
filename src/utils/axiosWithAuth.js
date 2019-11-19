import axios from "axios";

export const token = localStorage.getItem("token");

export const axiosWithAuth = () => {

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://buildweek30before30.herokuapp.com/api"
  });
};