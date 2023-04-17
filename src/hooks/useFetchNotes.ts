import {useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {fetchNotes} from "@/redux/slices/notesSlice";
import {AppDispatch} from "@/redux";

export const useFetchNotes = () => {
  const notes = useSelector((state: any) => state.notes.notes, shallowEqual);

  const loading = useSelector((state: any) => state.ui.loading, shallowEqual);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  return {notes, loading};
};
