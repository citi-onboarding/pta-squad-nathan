import axios from "axios";

const api = axios.create({
  baseURL: "https://pta-squad-nathan-server.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;