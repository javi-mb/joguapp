import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowOne = (props) => (
  <Svg
    width={13}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m6.369.162 5.516 7.871a1.234 1.234 0 0 1-1.01 1.942H1.233a1.234 1.234 0 0 1-1.01-1.942L5.74.162a.388.388 0 0 1 .63 0Z"
      fill="#4CD964"
    />
  </Svg>
);

export default ArrowOne;
