import type {PayloadAction} from "@reduxjs/toolkit";

import {createSlice} from "@reduxjs/toolkit";

export interface navbarState {
  value: string;
  openMenu: boolean;
}

const initialState: navbarState = {
  value: "notes",
  openMenu: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      state.openMenu = true;
    },
    changeOpenMenu: (state) => {
      state.openMenu = !state.openMenu;
    },
    changeOpenMenuHover: (state, action: PayloadAction<boolean>) => {
      state.openMenu = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeOpenMenu, changeOpenMenuHover, change} = navbarSlice.actions;

export default navbarSlice.reducer;
