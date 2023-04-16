import React, {useEffect, useState} from "react";
import {Stack, Spinner} from "@chakra-ui/react";
import {useSelector} from "react-redux";

import TagElement from "./TagElement";

import {getTags} from "@/services";
import {Tag} from "@/utilities";

interface Props {
  tags: Tag[] | undefined;
}

const Taglist: React.FC<Props> = ({tags}) => {
  console.log("esto son tag", tags);

  // useEffect(() => {
  //   getTagsApi();
  // }, [setTags]);

  return (
    <>
      <>
        {tags?.map((tag) => {
          return <TagElement key={tag._id} tag={tag.tagName} tagId={tag._id} />;
        })}
      </>
    </>
  );
};

export default Taglist;
