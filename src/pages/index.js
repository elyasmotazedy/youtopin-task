import { useEffect } from 'react';
import Head from 'next/head';
import { Handlee } from 'next/font/google';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '@/api/todo';
import TodoItem from '@/sections/Home';
import { Container, Grid, Typography } from '@mui/material';
import TodoForm from '@/components/TodoForm';

const handlee = Handlee({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.todo);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (isLoading) {
    return 'Loding';
  }

  return (
    <>
      <Head>
        <title>TODO APP</title>
        <meta name="description" content="this is todo manager app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sx={{ background: 'lightblue' }}>
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
          <Grid container>
            <Grid item xs={4}>
              <TodoForm />
            </Grid>
            <Grid item container xs={8}>
              {data &&
                data.map((item) => (
                  <Grid key={item.id} xs={3} sx={{ my: 4 }}>
                    <TodoItem item={item} />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
