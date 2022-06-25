import { ChangeEvent, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SelectOption } from "../../type";
import { LOCATION } from "../constant";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<
    string | undefined
  >();

  const navigate = useNavigate();

  const updateKeyword = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setKeyword(value);
  };

  const navigateToLocationList = () => {
    if (selectedLocation) {
      const location = encodeURIComponent(selectedLocation);
      let query: string = `?location=${location}`;
      if (keyword?.length) {
        query = query.concat(`&keyword=${keyword}`);
      }
      navigate(`/location-list${query}`);
    }
  };

  const updateSelectedLocation = (locationOption: string) => {
    setSelectedLocation(locationOption);
  };

  return (
    <>
      <h3>Select A Location</h3>
      <div className="mb-2">Keyword (Optional)</div>
      <input
        className="form-control mb-3"
        onChange={updateKeyword}
        placeholder="Ex: Restaurant, Grocery Store, Camping..."
        value={keyword}
      />
      <div className="mb-2">Location (Required)</div>
      <ListGroup className="mb-3">
        {LOCATION.LOCATION_OPTIONS.map(
          (locationOption: SelectOption, index: number) => {
            const key = `location-options-location-option-${index}`;
            const { label, value } = locationOption;
            return (
              <ListGroup.Item
                action
                active={selectedLocation === value}
                key={key}
                onClick={() => updateSelectedLocation(value)}
              >
                {label}
              </ListGroup.Item>
            );
          }
        )}
      </ListGroup>
      <Button disabled={!selectedLocation} onClick={navigateToLocationList}>
        Submit
      </Button>
    </>
  );
};

export { HomePage };
