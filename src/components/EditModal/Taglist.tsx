import React from "react";

import TagElement from "./TagElement";

interface Props {}

const Taglist: React.FC<Props> = ({}) => {
  const tagExamples = [{name: "Trabajo"}, {name: "Estudio"}, {name: "Personal"}];

  return (
    <>
      {tagExamples.map((tag) => {
        return <TagElement key={tag.name} tag={tag.name} />;
      })}
    </>
  );
};

export default Taglist;
