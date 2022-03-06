import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function CheckIcon(props: SvgProps) {
  return (
    <Svg
      width={44}
      height={44}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      // stroke={props.stroke}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M5 12l5 5L20 7" />
    </Svg>
  );
}
