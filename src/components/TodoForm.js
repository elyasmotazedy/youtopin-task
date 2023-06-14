import { useDispatch, useSelector } from 'react-redux';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { addTodo, editTodo } from '@/api/todo';
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
    control,
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
    } else {
      reset(defaultValues);
    }
  }, [editData]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3" component="p" sx={{ my: 2 }} align="center">
        Add todo
      </Typography>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            {...register('title', { required: true })}
            {...field}
            label="Title"
            variant="outlined"
            fullWidth
            sx={{ my: 1 }}
            error={errors.title}
            helperText={errors.title && <span>This field is required</span>}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            {...register('description', { required: true })}
            label="Description"
            multiline
            rows={4}
            sx={{ my: 1 }}
            error={errors.description}
            helperText={
              errors.description && <span>This field is required</span>
            }
          />
        )}
      />
      <Controller
        name="done"
        control={control}
        render={({ field }) => (
          <Checkbox
            {...field}
            checked={field.value}
            size="small"
            {...register('done')}
          />
        )}
      />
      is it a done task?
      <LoadingButton
        loading={isLoading}
        variant="outlined"
        type={isLoading ? 'button' : 'submit'}
        fullWidth
        sx={{ my: 2 }}
      >
        {editData ? 'Edit' : 'Add'}
      </LoadingButton>
    </form>
  );
};

export default TodoForm;
