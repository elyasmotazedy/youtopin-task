import { useEffect } from 'react';
import Head from 'next/head';
import { Handlee } from 'next/font/google';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '@/api/todo';
import TodoItem from '@/sections/Home';
import { Container, Grid, Typography } from '@mui/material';
import TodoForm from '@/components/TodoForm';
import { styled } from '@mui/material/styles';
import LoadingPlaceHolder from '@/components/LoadingPlaceHolder';

const handlee = Handlee({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.todo);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>TODO APP</title>
        <meta name="description" content="this is todo manager app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Typography
          align="center"
          variant="h1"
          component="h1"
          sx={{ py: 2 }}
          className={`${handlee.className}`}
        >
          Todo Manager
        </Typography>

        <Grid container>
          <AddTodoGrid item xs={4} sx={{ px: 3 }}>
            <TodoForm />
          </AddTodoGrid>
          <TodosGrid item container xs={8} sx={{ px: 3 }}>
            {isLoading ? (
              <Grid container item>
                <LoadingPlaceHolder />
              </Grid>
            ) : data ? (
              data.map((item) => (
                <Grid key={item.id} xs={4} sx={{ my: 2 }} item>
                  <TodoItem item={item} />
                </Grid>
              ))
            ) : (
              <Grid xs={12} sx={{ my: 2 }} item>
                <Typography variant="h3" align="center">
                  You Have No Tasks
                </Typography>
              </Grid>
            )}
          </TodosGrid>
        </Grid>
      </Container>
    </>
  );
}

const AddTodoGrid = styled(Grid)(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.grey[200],
  minHeight: '700px',
}));
const TodosGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  minHeight: '700px',
  maxHeight: '700px',
  overflow: 'auto',
}));
