import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function ArrowLeftIcon(props: SvgProps) {
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
      <Path d="M5 12L19 12" />
      <Path d="M5 12L11 18" />
      <Path d="M5 12L11 6" />
    </Svg>
  );
}
