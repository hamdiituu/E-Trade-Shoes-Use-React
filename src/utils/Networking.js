import * as Constans from "./Constans";

export const get = (url) => {
  return fetch(Constans.BASE_URL + url + Constans.BASE_URL_END);
};
