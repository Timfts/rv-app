import axios from "axios";

const API_ROOT = "https://next.json-generator.com/api/json/get/41ORKNZDU";

export async function fetchApi() {
  try {
    const response = await axios.get(API_ROOT);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
