import { api } from '@/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
  try {
    const { data } = await api.get('/todos');

    return data;
  } catch (err) {
    return false;
  }
});

export const fetchTodo = createAsyncThunk('fetchTodo', async (id) => {
  try {
    const { data } = await api.get(`/todos/${id}`);
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
export const chageTodoDone = createAsyncThunk(
  'chageTodoDone',
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
