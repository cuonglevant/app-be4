import axios from "axios";

const AXIOS = axios.create({
  // baseURL: "https://nts-sixblack--hexa.herokuapp.com/",
  // baseURL: "http://ec2-13-250-123-30.ap-southeast-1.compute.amazonaws.com",
  baseURL: "http://172.21.1.241:8081",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AXIOS;
