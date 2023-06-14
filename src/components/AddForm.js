import { useDispatch } from 'react-redux';
import { addTodos } from '@/redux/slices/todo';
import { useForm } from 'react-hook-form';

const defaultValues = {
  title: '',
  description: '',
  done: false,
};

const AddForm = () => {
  const dispatch = useDispatch();
  const methods = useForm({ defaultValues });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    dispatch(addTodos(data));
  };

  console.log(watch('example'));

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

export default AddForm;
