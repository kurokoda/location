import { sendHTTPRequest } from "../http/sendHTTPRequest";
import { HTTP } from "../../constant";
import { Location } from "../../../type";

const getLocationList = (
  searchPararms: string,
  onSuccess: (locations: Location[]) => void,
  onError: (error: string) => void
) => {
  const locationRequestUrl = `/locationList${searchPararms}`;

  sendHTTPRequest(locationRequestUrl, HTTP.METHOD.GET)
    .then((response: any) => {
      onSuccess(JSON.parse(response.data));
    })
    .catch((error: any) => {
      onError(error);
    });
};

export { getLocationList };
