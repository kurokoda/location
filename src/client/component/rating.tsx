import { times } from "lodash";
import styled from "styled-components/macro";

import { RatingValue } from "../../type";
import { COLOR } from "../constant";
import { Icon } from "./icon";

type RatingProps = {
  rating: RatingValue;
  
  doShowText?: boolean;
};

const IconContainer = styled.div`
  width: 120px;
`;

const Rating = ({ doShowText, rating }: RatingProps) => {
  const hasRating = typeof rating === "number";
  return (
    <>
      {hasRating ? (
        <div className="d-flex align-items-center">
          <IconContainer>
            {times(5, (ratingValue: number) => (
              <Icon
                key={`rating-star-${ratingValue}`}
                color={
                  ratingValue < rating ? COLOR.YELLOW : COLOR.GRAYSCALE_LIGHTEST
                }
                type="star"
              />
            ))}
          </IconContainer>
          {doShowText ? <div className="ml-2">{`(${rating}/5)`}</div> : null}
        </div>
      ) : (
        <i>No ratings</i>
      )}
    </>
  );
};

export { Rating };
