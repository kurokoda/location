import { RatingValue } from "./rating";

type GoogleLocation = {
  business_status: string;
  geometry: {
    location: { lat: number; lng: number };
    viewport: { northeast: any; southwest: any };
  };
  icon: string; // uri
  icon_background_color: string; // color
  icon_mask_base_uri: string; // uri
  name: string;
  photos: LocationPhoto[];
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
};

type Location = {
  name: string;
  place_id: string;
  formatted_phone_number: string;
  photos: LocationPhoto[];
  rating: RatingValue;
  reviews: any[];
};

type LocationPhoto = {
  height: number;
  html_attributions: any[];
  photo_reference: string;
  width: number;
};

export type { GoogleLocation, Location, LocationPhoto };
