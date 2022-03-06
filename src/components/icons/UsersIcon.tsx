import React from "react";
import Svg, { Path, Circle, SvgProps } from "react-native-svg";

export default function UsersIcon(props: SvgProps) {
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
      <Circle cx={9} cy={7} r={4} />
      <Path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.85" />
    </Svg>
  );
}
