import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {setLoading} from "./uiSlice";

import {Tag} from "@/utilities";
import {getTags, createTag as createTagApi, deleteTag as deleteTagApi} from "@/services";

interface TagState {
  tags: Tag[];
}

const initialState: TagState = {
  tags: [],
};

export const fetchTags = createAsyncThunk("tags/fetchTags", async (_, {dispatch}) => {
  dispatch(setLoading(true));

  const tagRes = await getTags();

  dispatch(addTags(tagRes));
  dispatch(setLoading(false));
});

const createTag = createAsyncThunk("users/createTags", async (tagName: string) => {
  const tagRes = await createTagApi(tagName);

  return tagRes;
});

const deleteTagById = createAsyncThunk("tags/deleteTag", async (id: number) => {
  await deleteTagApi(id);

  return id;
});

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTags: (state, action: PayloadAction<Tag[] | undefined>) => {
      const tagsToAdd = action.payload || [];
      const uniqueTags = tagsToAdd.filter((tag) => {
        return !state.tags.some((existingTag) => existingTag._id === tag._id);
      });

      state.tags.push(...uniqueTags);
    },
    addTag: (state, action: PayloadAction<Tag>) => {
      state.tags.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTag.fulfilled, (state, action) => {
      state.tags.push(action.payload);
    });
    builder.addCase(deleteTagById.fulfilled, (state, action) => {
      const idToDelete = action.payload;

      state.tags = state.tags.filter((tag) => tag._id !== idToDelete);
    });
  },
});

export {createTag, deleteTagById};

export const {addTag, addTags} = tagSlice.actions;

export default tagSlice.reducer;
