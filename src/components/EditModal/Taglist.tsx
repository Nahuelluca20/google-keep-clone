import TagElement from "./TagElement";

import {Tag} from "@/utilities";

interface Props {
  tags: Tag[] | undefined;
}

const Taglist: React.FC<Props> = ({tags}) => {
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
