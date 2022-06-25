import { sendHTTPRequest } from "../http/sendHTTPRequest";
import { HTTP } from "../../constant";
import { Location } from "../../../type";

const getLocationDetail = (
  searchPararms: string,
  onSuccess: (locations: Location) => void,
  onError: (error: string) => void
) => {
  const locationRequestUrl = `/locationDetail${searchPararms}`;

  sendHTTPRequest(locationRequestUrl, HTTP.METHOD.GET)
    .then((response: any) => {
      onSuccess(JSON.parse(response.data));
    })
    .catch((error: any) => {
      onError(error);
    });
};

export { getLocationDetail };
