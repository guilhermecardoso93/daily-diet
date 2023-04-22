import React from "react";
import { Title } from "./styles";

type DataTextProps = {
  date: string;
};

export function DateText({ date }: DataTextProps) {
  return <Title>{date}</Title>;
}
