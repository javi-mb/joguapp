import * as React from "react";
import Svg, { Path } from "react-native-svg";

const RightButton = (props) => (
  <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.362 8.181A8.181 8.181 0 1 0 0 8.181a8.181 8.181 0 0 0 16.362 0Z"
      fill="#F2F2F2"
    />
    <Path
      d="M7.257 5.724a.344.344 0 0 0-.25-.1.345.345 0 0 0-.245.6l2.1 2.011-2.1 2.005a.36.36 0 0 0-.111.253.35.35 0 0 0 .357.347.343.343 0 0 0 .249-.1l2.336-2.234a.375.375 0 0 0 .126-.274.36.36 0 0 0-.126-.27L7.257 5.724Z"
      fill="#4F4F4F"
    />
  </Svg>
);

export default RightButton;
