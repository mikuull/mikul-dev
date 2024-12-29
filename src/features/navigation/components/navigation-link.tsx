import React from "react";

export const NavigationLink = ({ name, path }: NavigationLinkType) => {
  //TODO: scroll to path implementation
  return <p className="cursor-pointer text-[#979797] font-semibold">{name}</p>;
};
