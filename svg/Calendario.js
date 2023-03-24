import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Calendario = (props) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1 8.875c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586h15.25c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v1.167H1V8.875Z"
      fill="#00BBB4"
    />
    <Path
      d="M22.25 4.875H3a2 2 0 0 0-2 2V22.25a2 2 0 0 0 2 2h19.25a2 2 0 0 0 2-2V6.875a2 2 0 0 0-2-2Z"
      stroke="#00BBB4"
      strokeWidth={1.2}
    />
    <Path
      d="M6.164 1v3.875M19.086 1v3.875"
      stroke="#00BBB4"
      strokeWidth={1.2}
      strokeLinecap="round"
    />
    <Path
      d="M10.831 12.625H6.664a.5.5 0 0 0-.5.5v1.583a.5.5 0 0 0 .5.5h4.167a.5.5 0 0 0 .5-.5v-1.583a.5.5 0 0 0-.5-.5ZM10.831 17.791H6.664a.5.5 0 0 0-.5.5v1.583a.5.5 0 0 0 .5.5h4.167a.5.5 0 0 0 .5-.5v-1.583a.5.5 0 0 0-.5-.5ZM18.581 12.625h-4.167a.5.5 0 0 0-.5.5v1.583a.5.5 0 0 0 .5.5h4.167a.5.5 0 0 0 .5-.5v-1.583a.5.5 0 0 0-.5-.5ZM18.581 17.791h-4.167a.5.5 0 0 0-.5.5v1.583a.5.5 0 0 0 .5.5h4.167a.5.5 0 0 0 .5-.5v-1.583a.5.5 0 0 0-.5-.5Z"
      fill="#00BBB4"
    />
  </Svg>
);

export default Calendario;
