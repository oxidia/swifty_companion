import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function ExternalLinkIcon(props: SvgProps) {
  return (
    <Svg
      width={44}
      height={44}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M11 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5" />
      <Path d="M10 14L20 4" />
      <Path d="M15 4L20 4 20 9" />
    </Svg>
  );
}
