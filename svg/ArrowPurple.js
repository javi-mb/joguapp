import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={8}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.032 9.216a.519.519 0 0 1-.142-.154.4.4 0 0 1-.05-.2.436.436 0 0 1 .192-.35l4.95-3.835L1.032.845A.435.435 0 0 1 .84.49.42.42 0 0 1 .89.295a.412.412 0 0 1 .142-.148.75.75 0 0 1 .893 0l5.409 4.176c.055.042.1.096.133.156a.4.4 0 0 1 0 .395.492.492 0 0 1-.133.154L1.925 9.212a.78.78 0 0 1-.893 0v.004Z"
      fill="#7325FB"
    />
  </Svg>
);

export default SvgComponent;
