import httpService from "./httpService";
import { baseUrl } from "./config";

const url = baseUrl + "/rest/ad";

export const getAllAds = () => {
  return httpService.get(url + "/getAll");
};
