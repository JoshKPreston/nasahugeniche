//?api_key=hzEfmPrwFjfEk0MRlRcdlDulPhHSTY15pTbMprfZ

import Axios from "axios"
export const nasaAPI = Axios.create ({
  baseURL: "https://api.nasa.gov/planetary/apod?api_key=hzEfmPrwFjfEk0MRlRcdlDulPhHSTY15pTbMprfZ",
  timeout: 3000
})
