import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function LoaderQuarterIcon(props: SvgProps) {
  return (
    <Svg
      width={44}
      height={44}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      // stroke=""
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M12 6L12 3" />
      <Path d="M6 12L3 12" />
      <Path d="M7.75 7.75L5.6 5.6" />
    </Svg>
  );
}
