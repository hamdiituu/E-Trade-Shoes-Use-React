import * as Constans from "./Constans";

export async function get(url){
  return await fetch(Constans.BASE_URL + url + Constans.BASE_URL_END);
};
