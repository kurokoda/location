import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Location } from "../../type";

import { LoadingCard, MessageCard } from "../component";
import { Rating } from "../component/rating";
import { getLocationList } from "../service";

const LocationListPage = () => {
  const [locationList, setLocationList] = useState<Location[] | undefined>();

  const navigate = useNavigate();

  const handleGetLocationListError = (error: string) => {
    console.log(error);
  };

  const navigateToLocationDetailPage = (placeId: string) => {
    navigate(`/location-detail?placeId=${placeId}`);
  };

  const updateLocationList = (newLocationList: Location[]) => {
    setLocationList(newLocationList);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const location = searchParams.get("location");
    if (location) {
      const { search: searchParams } = window.location;
      getLocationList(
        searchParams,
        updateLocationList,
        handleGetLocationListError
      );
    } else {
      navigate("/home");
    }
  }, [navigate]);

  if (!locationList) {
    return <LoadingCard />;
  } else if (!locationList.length) {
    return (
      <MessageCard
        icon="error"
        text="Try searching again"
        title="No locations match your search"
      />
    );
  } else {
    return (
      <>
        <h3>Location List</h3>
        <ListGroup className="mb-3">
          {locationList
            ? locationList.map((location: Location, index: number) => {
                const key = `locationList-location-${index}`;
                const { name, place_id: placeId, rating } = location;
                return (
                  <ListGroup.Item
                    action
                    key={key}
                    onClick={() => navigateToLocationDetailPage(placeId)}
                  >
                    <div className="d-flex justify-content-between">
                      <span className="mr-3">{name}</span>
                      <Rating rating={rating} />
                    </div>
                  </ListGroup.Item>
                );
              })
            : null}
        </ListGroup>
      </>
    );
  }
};

export { LocationListPage };
