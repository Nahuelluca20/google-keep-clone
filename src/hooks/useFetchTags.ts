import {useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {fetchTags} from "@/redux/slices/tagSlice";
import {AppDispatch} from "@/redux";

export const useFetchTags = () => {
  const tags = useSelector((state: any) => state.tag.tags, shallowEqual);

  const loading = useSelector((state: any) => state.ui.loading, shallowEqual);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  return {tags, loading};
};
