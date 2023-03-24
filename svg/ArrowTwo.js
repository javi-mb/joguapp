import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowTwo = (props) => (
  <Svg
    width={13}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m6.369 9.813 5.516-7.872A1.235 1.235 0 0 0 10.875 0H1.233a1.234 1.234 0 0 0-1.01 1.941L5.74 9.813a.388.388 0 0 0 .63 0Z"
      fill="#FE4D4D"
    />
  </Svg>
);

export default ArrowTwo;
