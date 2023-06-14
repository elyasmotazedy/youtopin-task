import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo } from '@/api/todo';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const defaultValues = {
  title: '',
  description: '',
  done: false,
};
const TodoForm = () => {
  const editData = useSelector((state) => state.todo.editData);
  const dispatch = useDispatch();
  const methods = useForm({ defaultValues });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    if (editData) {
      dispatch(editTodo(data));
    } else {
      dispatch(addTodo(data));
    }
  };

  useEffect(() => {
    if (editData) {
      reset(editData);
    }
  }, [editData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3" component="p" sx={{ my: 2 }} align="center">
        Add todo
      </Typography>
      <TextField
        {...register('title', { required: true })}
        label="Title"
        variant="outlined"
        fullWidth
        sx={{ my: 1 }}
        error={errors.title}
        helperText={errors.title && <span>This field is required</span>}
      />

      <TextField
        fullWidth
        {...register('description', { required: true })}
        label="Description"
        multiline
        rows={4}
        sx={{ my: 1 }}
        error={errors.description}
        helperText={errors.description && <span>This field is required</span>}
      />
      <LoadingButton loading={isSubmitting} variant="outlined" type="submit">
        Add
      </LoadingButton>
    </form>
  );
};

export default TodoForm;
