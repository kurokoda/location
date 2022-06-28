import { sendHTTPRequest } from "../../http/sendHTTPRequest/sendHTTPRequest";
import { HTTP } from "../../../constant";
import { Location } from "../../../../type";

const getLocationDetail = async (
  searchParams: string,
  onSuccess: (locations: Location) => void,
  onError: (error: string) => void
) => {
  const locationRequestUrl = `/locationDetail${searchParams}`;

  try {
    const data = await sendHTTPRequest(locationRequestUrl, HTTP.METHOD.GET);
    onSuccess(data);
  } catch (error: any) {
    onError(error);
  }
};

export { getLocationDetail };
