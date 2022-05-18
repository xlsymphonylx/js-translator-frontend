import axios from "axios";
import { externalApiConfig } from "../utils/constants";

const translateService = {
  async translate({ code }) {
    const { data } = await axios.post(
      "/translate",
      {
        code,
      },
      externalApiConfig
    );
    return data;
  },
};

export default translateService;
