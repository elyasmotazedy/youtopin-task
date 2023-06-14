import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo } from '@/api/todo';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const defaultValues = {
  title: '',
  description: '',
  done: false,
};
const TodoForm = () => {
  const editData = useSelector((state) => state.todo.editData);
  console.log(editData);
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
      <input {...register('title', { required: true })} />
      {errors.title && <span>This field is required</span>}

      <input {...register('description', { required: true })} />
      {errors.description && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default TodoForm;