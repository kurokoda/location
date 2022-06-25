import { RequestMethod } from "../../type";

type HTTPConstant = {
  METHOD: Record<string, RequestMethod>;
};

const HTTP: HTTPConstant = {
  METHOD: {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  }
};

export { HTTP };
