import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {setLoading} from "./uiSlice";

import {Note} from "@/utilities";
import {
  getNotes,
  createNote as createNoteApi,
  deleteNote,
  updateNote,
  deleteTagFromNote,
} from "@/services";

interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: [],
};

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async (_, {dispatch}) => {
  dispatch(setLoading(true));

  const notesRes = await getNotes();

  dispatch(addNotes(notesRes));
  dispatch(setLoading(false));
});

const createNote = createAsyncThunk(
  "notes/createNote",
  async (note: {title: string; content: string; tags: any}) => {
    const noteRes = await createNoteApi(note.title, note.content, note.tags);

    return noteRes;
  },
);

const deleteNoteById = createAsyncThunk("notes/deleteNote", async (id: number) => {
  await deleteNote(id);

  return id;
});

const updateNoteById = createAsyncThunk(
  "notes/updateNote",
  async ({id, title, content}: {id: number; title: string; content: string}) => {
    const noteRes = await updateNote(id, title, content);

    return noteRes;
  },
);

const deleteTagFromNoteById = createAsyncThunk(
  "notes/deleteTagFromNote",
  async ({id, tagId}: {id: number; tagId: number}) => {
    await deleteTagFromNote(id, tagId);

    return {id, tagId};
  },
);

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes: (state, action: PayloadAction<Note[] | undefined>) => {
      const notesToAdd = action.payload || [];
      const uniqueNotes = notesToAdd.filter((note) => {
        return !state.notes.some((existingNote) => existingNote._id === note._id);
      });

      state.notes.push(...uniqueNotes);
    },
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNote.fulfilled, (state, action) => {
      state.notes.push(action.payload);
    });
    builder.addCase(deleteNoteById.fulfilled, (state, action) => {
      const idToDelete = action.payload;

      state.notes = state.notes.filter((note) => note._id !== idToDelete);
    });
    builder.addCase(deleteTagFromNoteById.fulfilled, (state, action) => {
      const {id, tagId} = action.payload;

      state.notes = state.notes.map((note) => {
        if (note._id === id) {
          const updatedTags = note.tags.filter((tag) => tag._id !== tagId);

          return {...note, tags: updatedTags};
        }

        return note;
      });
    });
    builder.addCase(updateNoteById.fulfilled, (state, action) => {
      const updatedNote = action.payload;

      state.notes = state.notes.map((note) => {
        if (note._id === updatedNote._id) {
          return updatedNote;
        }

        return note;
      });
    });
  },
});

export {createNote, deleteNoteById, updateNoteById, deleteTagFromNoteById};

export const {addNote, addNotes} = noteSlice.actions;

export default noteSlice.reducer;
