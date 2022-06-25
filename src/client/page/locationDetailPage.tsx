import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Location } from "../../type";
import { LoadingCard } from "../component";
import { Rating } from "../component/rating";
import { getLocationDetail } from "../service";

const LocationDetailPage = () => {
  const [locationDetail, setLocationDetail] = useState<Location | undefined>();

  const navigate = useNavigate();

  const handleGetLocationDetailError = (error: string) => {
    console.log(error);
  };

  const updateLocationDetail = (newLocationDetail: Location) => {
    setLocationDetail(newLocationDetail);
  };

  useEffect(() => {
    const placeId = new URLSearchParams(window.location.search).get("placeId");
    if (placeId) {
      getLocationDetail(
        window.location.search,
        updateLocationDetail,
        handleGetLocationDetailError
      );
    } else {
      navigate("/home");
    }
  }, [navigate]);

  if (!locationDetail) {
    return <LoadingCard />;
  }

  const {
    formatted_phone_number: formattedPhoneNumber,
    name,
    rating,
    reviews,
  } = locationDetail;

  return (
    <>
      <h3>Location Details</h3>
      <div className="mb-3">
        <b>{name}</b>
        <div>{formattedPhoneNumber}</div>
        <Rating rating={rating} doShowText/>
      </div>
      {reviews && reviews.length ? (
        reviews.map((review: any, index: number) => {
          const key = `reviews-review-${index}`;
          const { author_name: authorName, rating, text } = review;
          return (
            <div className="mb-4 pt-3 border-top" key={key}>
              <div className="mb-3">{text}</div>
              <div className="d-flex justify-content-between">
              <b>- {authorName}</b>
              <Rating rating={rating}/>
              </div>
            </div>
          );
        })
      ) : (
        <i>No Reviews</i>
      )}
    </>
  );
};

export { LocationDetailPage };
