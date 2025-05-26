import AngleDown from "../assets/icons/angle-down.svg";
import AngleUp from "../assets/icons/angle-up.svg";
import AngleRight from "../assets/icons/angle-right.svg";
import AngleLeft from "../assets/icons/angle-left.svg";
import Bag from "../assets/icons/bag.svg";
import Door from "../assets/icons/door.svg";
import Fuel from "../assets/icons/fuel.svg";
import Person from "../assets/icons/person.svg";
import Plane from "../assets/icons/plane.svg";
import Snowflake from "../assets/icons/snowflake.svg";
import Transmission from "../assets/icons/transmission.svg";
import type { CSSProperties } from "react";

export const ICONS = {
  AngleDown,
  AngleUp,
  AngleRight,
  AngleLeft,
  Bag,
  Door,
  Fuel,
  Person,
  Plane,
  Snowflake,
  Transmission,
} as const;

type Props = {
  icon: keyof typeof ICONS;
  style?: CSSProperties;
};

const Icon = ({ icon, style }: Props) => (
  <img
    src={ICONS[icon]}
    style={{ height: 16, width: 20, ...style }}
    alt="icon"
  />
);

export default Icon;
