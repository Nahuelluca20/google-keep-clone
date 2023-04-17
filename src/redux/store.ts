import {configureStore} from "@reduxjs/toolkit";

import {navbarReducer, notesReducer, tagReducer, uiReducer} from "./slices";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    navbar: navbarReducer,
    tag: tagReducer,
    ui: uiReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
