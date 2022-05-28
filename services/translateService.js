import axios from "axios";
import { externalApiConfig } from "../utils/constants";

const translateService = {
  async translateJS({ code }) {
    const { data } = await axios.post(
      "/translateJS",
      {
        code,
      },
      externalApiConfig
    );
    return data;
  },
  async getUserExercises() {
    const { data } = await axios.get("/getUserExercises", externalApiConfig);
    return data;
  },
  async getExercise(id) {
    const { data } = await axios.get(`/exercise/${id}`, externalApiConfig);
    return data;
  },
  async deleteExercise(id) {
    const { data } = await axios.delete(
      `/deleteExercise/${id}`,
      externalApiConfig
    );
    return data;
  },
  async translatePseudo({ code }) {
    const { data } = await axios.post(
      "/translatePseudo",
      {
        code,
      },
      externalApiConfig
    );
    return data;
  },
  async saveExercise({
    code,
    translatedCode,
    exerciseType,
    title,
    description,
  }) {
    const { data } = await axios.post(
      "/saveExercise",
      {
        code,
        translatedCode,
        exerciseType,
        title,
        description,
      },
      externalApiConfig
    );
    return data;
  },
};

export default translateService;
