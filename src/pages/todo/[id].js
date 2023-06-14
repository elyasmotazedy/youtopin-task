import { useEffect } from 'react';
import IsDone from '@/components/IsDone';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '@/api/todo';
import { useRouter } from 'next/router';
import { Container, Grid, Typography } from '@mui/material';

const Todo = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.todo);
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    dispatch(fetchTodo(id));
  }, [dispatch, id]);

  if (isLoading) {
    return 'loading';
  }

  return (
    data && (
      <Container>
        <Grid container>
          <Grid item>
            <Typography variant="h2" component="h1">
              {data.title}
            </Typography>
            <Typography variant="subtitle1" component="span">
              <IsDone item={data} />
            </Typography>

            <Typography variant="button" component="p">
              description:
            </Typography>
            <Typography variant="body1" component="p">
              {data.description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    )
  );
};

export default Todo;
