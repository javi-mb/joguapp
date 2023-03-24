import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Plus = (props) => (
  <Svg
    width={11}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M4 0v11h3V0H4Z" fill="#47DB11" />
    <Path d="M0 7h11V4H0v3Z" fill="#47DB11" />
  </Svg>
);

export default Plus;
