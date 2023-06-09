import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={11}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.856.95a.84.84 0 0 1 0 1.258l-7.529 6.93 7.525 6.931a.84.84 0 0 1 0 1.258 1.025 1.025 0 0 1-1.366 0L.283 9.767a.84.84 0 0 1 0-1.258L8.491.95a1.025 1.025 0 0 1 1.365 0Z"
      fill="#360BA2"
    />
  </Svg>
);

export default SvgComponent;
