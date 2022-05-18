import axios from "axios";
import { externalApiConfig } from "../utils/constants";

const authService = {
  async login({ email, password }) {
    await axios.post(
      "/login",
      {
        email,
        password,
      },
      externalApiConfig
    );
  },
  async logout() {
    await axios.post("/logout", {}, externalApiConfig);
  },
  async register({ email, password, name }) {
    const { data } = await axios.post(
      "/register",
      {
        email,
        password,
        name,
      },
      externalApiConfig
    );
    return data;
  },
};

export default authService;
