import React, { FC } from "react";

type Item = {
  contributor: string;
  amount: string;
};

type Props = {
  contributors: Item[];
};

export const EventsList: FC<Props> = ({ contributors }) => {
  return <div>EventsList</div>;
};
