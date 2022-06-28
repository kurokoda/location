import { sendHTTPRequest } from "../../http/sendHTTPRequest/sendHTTPRequest";
import { HTTP } from "../../../constant";
import { Location } from "../../../../type";

const getLocationList = async (
  searchParams: string,
  onSuccess: (locations: Location[]) => void,
  onError: (error: string) => void
) => {
  const locationRequestUrl = `/locationList${searchParams}`;

  try {
    const data = await sendHTTPRequest(locationRequestUrl, HTTP.METHOD.GET);
    onSuccess(data);
  } catch (error: any) {
    onError(error);
  }
};

export { getLocationList };
