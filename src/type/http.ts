type RequestConfig = {
  method: RequestMethod;
  mode: RequestMode;
  body?: string;
};

type RequestMethod = "GET" | "POST" | "DELETE" | "PUT";

type GetLocationListQuery = {
  location: string | null;
  keyword: string | null;
};

type GetLocationDetailQuery = {
  placeId: string | null;
};

export type {
  GetLocationDetailQuery,
  GetLocationListQuery,
  RequestConfig,
  RequestMethod,
};
