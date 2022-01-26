import axios from "axios";

const api = axios.create({
  baseURL: "https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge",
  headers: {
    "Content-type": "application/json"
  },
});

export default api;