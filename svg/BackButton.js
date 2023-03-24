import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.362 8.181A8.181 8.181 0 1 0 0 8.181a8.181 8.181 0 0 0 16.362 0Z"
      fill="#F2F2F2"
    />
    <Path
      d="M9.11 10.739a.344.344 0 0 0 .25.1.35.35 0 0 0 .356-.347.355.355 0 0 0-.11-.253l-2.1-2.011 2.1-2.005a.358.358 0 0 0 .11-.253.358.358 0 0 0-.606-.247L6.774 7.958a.37.37 0 0 0-.126.273.362.362 0 0 0 .126.271l2.336 2.237Z"
      fill="#4F4F4F"
    />
  </Svg>
);

export default SvgComponent;
