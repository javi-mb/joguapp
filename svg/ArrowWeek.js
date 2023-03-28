import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={11}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m5.301 8.04 4.747-6.782A.8.8 0 0 0 9.394 0H.8a.8.8 0 0 0-.656 1.258l4.75 6.782a.25.25 0 0 0 .407 0Z"
      fill="#00BBB4"
    />
  </Svg>
);

export default SvgComponent;
