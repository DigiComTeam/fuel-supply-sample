import axios from "axios";
import { API_BASE_URL, API_KEY } from "../constants/env";

export type FetchTankLastLevelsArgs = {
  stationCode: number;
};

export const fetchTankLastLevels = async (args?: FetchTankLastLevelsArgs) => {
  const { stationCode } = args || {};
  const { data } = await axios.get(`${API_BASE_URL}/tanks/last-level`, {
    headers: {
      "x-api-key": API_KEY,
    },
    params: {
      stationCode,
    },
  });

  return data;
};
