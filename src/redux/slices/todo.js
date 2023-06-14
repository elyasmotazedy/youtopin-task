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
export const addTodo = createAsyncThunk('addTodo', async (params) => {
  try {
    const { data } = await api.post('/todos', { ...params });
    return data;
  } catch (err) {
    return false;
  }
});

export const removeTodo = createAsyncThunk(
  'removeTodo',
  async (id, { dispatch }) => {
    try {
      const { status } = await api.delete(`/todos/${id}`);

      if (status === 200) {
        dispatch(fetchTodos());
      }
      return data;
    } catch (err) {
      return false;
    }
  }
);
export const editTodo = createAsyncThunk(
  'editTodo',
  async (data, { dispatch }) => {
    try {
      const { status } = await api.put(`/todos/${data.id}`, { ...data });

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
    builder.addCase(addTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    // _________________________________________
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, action.payload];
    });
    builder.addCase(editTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.data = [...state.data, action.payload];
    });
    builder.addCase(removeTodo.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    // _________________________________________
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
    builder.addCase(editTodo.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
    builder.addCase(removeTodo.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

export const { setEditData } = todoSlice.actions;

export default todoSlice.reducer;
