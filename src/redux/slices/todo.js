import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTodos,
  addTodo,
  removeTodo,
  editTodo,
  chageTodoDone,
  fetchTodo,
} from '@/api/todo';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    isLoading: false,
    data: null,
    isError: null,
    editData: null,
  },
  reducers: {
    setEditData: (state, action) => {
      state.editData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(chageTodoDone.pending, (state, action) => {
      state.isLoading = true;
    });

    // _________________________________________

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, action.payload];
    });
    builder.addCase(editTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.editData = null;
    });
    builder.addCase(removeTodo.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(chageTodoDone.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // _________________________________________

    builder.addCase(fetchTodo.rejected, (state, action) => {
      // state.isError = true;
      console.log('action __ action', action);
      if (action.payload) {
        state.isError = action.payload.errorMessage;
      } else {
        state.isError = action.error.message;
      }
    });
    // builder.addCase(fetchTodos.rejected, (state, action) => {
    //   console.log('Error', action.payload);
    //   state.isError = true;
    // });
    // builder.addCase(addTodo.rejected, (state, action) => {
    //   console.log('Error', action.payload);
    //   state.isError = true;
    // });
    // builder.addCase(editTodo.rejected, (state, action) => {
    //   console.log('Error', action.payload);
    //   state.isError = true;
    // });
    // builder.addCase(removeTodo.rejected, (state, action) => {
    //   console.log('Error', action.payload);
    //   state.isError = true;
    // });
    // builder.addCase(chageTodoDone.rejected, (state, action) => {
    //   console.log('Error', action.payload);
    //   state.isError = true;
    // });
  },
});

export const { setEditData } = todoSlice.actions;

export default todoSlice.reducer;
