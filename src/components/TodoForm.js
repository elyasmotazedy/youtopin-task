import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo } from '@/api/todo';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Checkbox, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const defaultValues = {
  title: '',
  description: '',
  done: false,
};
const TodoForm = () => {
  const { editData, isLoading } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const methods = useForm({ defaultValues });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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
      <Checkbox size="small" {...register('done')} />
      is it a done task?
      <LoadingButton
        loading={isLoading}
        variant="outlined"
        type={isLoading ? 'button' : 'submit'}
        fullWidth
        sx={{ my: 2 }}
      >
        Add
      </LoadingButton>
    </form>
  );
};

export default TodoForm;
