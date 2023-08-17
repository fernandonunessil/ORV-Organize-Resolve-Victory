import axios from "axios";

const userAPi = axios.create({ baseURL: "http://localhost:8080" });

export function Login() {
  return new Promise((req, res) => {
    userAPi
      .get("/login")
      .then((result) => {
        res(result);
      })
      .catch((err) => {
        req(err);
      });
  });
}
