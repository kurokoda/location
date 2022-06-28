import {
  Error as ErrorIcon,
  LocationOn as LocationIcon,
  Star as StarIcon,
} from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import { COLOR } from "../constant";

export const iconTypes = ["error", "location", "star"] as const;

export type IconType = typeof iconTypes[number];

const typeToIconMap: Record<IconType, OverridableComponent<SvgIconTypeMap>> = {
  error: ErrorIcon,
  location: LocationIcon,
  star: StarIcon,
};
interface IconProps {
  type: IconType;
  color?: string;
}

const Icon = ({ color, type }: IconProps) => {
  const IconFromMap = typeToIconMap[type];

  return (
    <IconFromMap style={{ fill: color ? color : COLOR.GRAYSCALE_MEDIUM }} />
  );
};

export { Icon };
