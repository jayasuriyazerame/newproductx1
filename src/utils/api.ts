import axios from "axios";
//  export const API_ENDPOINT = "http://zerame.com/productx1/";


 export const API_ENDPOINT = " http://localhost/zerame1/zerame/";


export async function callApi(method: string, path: string, data?: any) {
  if (method.toUpperCase() === "POST") {
    // return await axios.post(API_ENDPOINT + 'api/' + path, data);
	return await axios.post(API_ENDPOINT + path, data);
  } else if (method.toUpperCase() === "DELETE") {
    // return await axios.delete(API_ENDPOINT + 'api/' + path);
	return await axios.delete(API_ENDPOINT + path);
  } else {
    // return await axios.get(API_ENDPOINT + 'api/' + path);
	return await axios.get(API_ENDPOINT + path);
  }
}
