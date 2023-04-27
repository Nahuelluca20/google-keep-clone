import {Tag} from "./tagType";

export type Note = {
  _id: number;
  title: string;
  content: string;
  tags: Tag[];
  reminder: string;
  archived: boolean;
};
