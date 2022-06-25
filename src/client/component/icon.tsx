import {
  Add as AddIcon,
  CalendarToday as CalendarIcon,
  Cancel as CancelIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  DeleteForever as DeleteIcon,
  Edit as EditIcon,
  Email as EmailIcon,
  ErrorOutline as ErrorIcon,
  HelpOutline as HelpIcon,
  Home as HomeIcon,
  NotListedLocation as LocationIcon,
  MoreHoriz as MoreIcon,
  Menu as MenuIcon,
  Person as PersonIcon,
  Save as SaveIcon,
  Star as StarIcon,
  Warning as WarningIcon,
} from "@material-ui/icons";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { COLOR } from "../constant";

export const iconTypes = [
  "add",
  "calendar",
  "cancel",
  "check",
  "close",
  "delete",
  "edit",
  "email",
  "error",
  "help",
  "home",
  "location",
  "menu",
  "more",
  "person",
  "save",
  "star",
  "warning",
] as const;

export type IconType = typeof iconTypes[number];

const typeToIconMap: Record<IconType, OverridableComponent<SvgIconTypeMap>> = {
  add: AddIcon,
  calendar: CalendarIcon,
  cancel: CancelIcon,
  check: CheckIcon,
  close: CloseIcon,
  delete: DeleteIcon,
  edit: EditIcon,
  email: EmailIcon,
  error: ErrorIcon,
  help: HelpIcon,
  home: HomeIcon,
  location: LocationIcon,
  menu: MenuIcon,
  more: MoreIcon,
  person: PersonIcon,
  save: SaveIcon,
  star: StarIcon,
  warning: WarningIcon,
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
