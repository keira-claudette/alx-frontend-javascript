import { getResponseFromAPI } from "./0-promise";
const respone = getResponseFromAPI();
console.log(response instanceof Promise);