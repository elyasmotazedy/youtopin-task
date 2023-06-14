import { api } from '@/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
  try {
    const { data } = await api.get('/todos');
    return data;
  } catch (err) {
    return false;
  }
});
export const addTodos = createAsyncThunk('addTodos', async (params) => {
  try {
    const { data } = await api.post('/todos', { ...params });
    return data;
  } catch (err) {
    return false;
  }
});
export const removeTodos = createAsyncThunk(
  'removeTodos',
  async (id, { dispatch }) => {
    try {
      const { status } = await api.delete(`/todos/${id}`);
      console.log('remove::', status);

      if (status === 200) {
        dispatch(fetchTodos());
      }
      return data;
    } catch (err) {
      return false;
    }
  }
);

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    // _________________________________________
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(addTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, action.payload];
    });
    builder.addCase(removeTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.data = [...state.data, action.payload];
    });
    // _________________________________________
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
    builder.addCase(addTodos.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
    builder.addCase(removeTodos.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;
