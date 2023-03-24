import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Filter = (props) => (
  <Svg
    width={21}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.552 21.637V5.953M3.476 21.638v-5.543M10.552 5.952a2.476 2.476 0 1 0 0-4.952 2.476 2.476 0 0 0 0 4.952ZM3.476 15.858a2.476 2.476 0 1 0 0-4.952 2.476 2.476 0 0 0 0 4.952ZM3.476 21.638v-5.543M3.476 10.198V2.179M3.476 10.198V2.179M17.51 21.638v-5.543M17.509 15.858a2.476 2.476 0 1 0 0-4.952 2.476 2.476 0 0 0 0 4.952ZM17.51 21.638v-5.543M17.51 10.198V2.179M17.51 10.198V2.179"
      stroke="#7300FF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Filter;
