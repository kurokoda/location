import axios from "axios";

import { RequestMethod } from "../../../type";

const sendHTTPRequest = (
  url: string,
  method: RequestMethod,
  data?: Record<string, any>
) => {
  const domain = "http://localhost:5000";
  const fullUrl = domain + url;

  return axios({
    method,
    url: fullUrl,
    data,
  })
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { sendHTTPRequest };
