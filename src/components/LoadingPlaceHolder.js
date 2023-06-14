import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Skeleton,
} from "@mui/material";

export const LoadingPlaceHolderTodos = () => {
  const arr = [...Array(3).keys()];
  return arr.map((value) => (
    <Grid key={value} xs={4} sx={{ my: 4 }} item>
      <Card sx={{ mx: 1 }}>
        <CardContent>
          <Skeleton variant="text" width={150} sx={{ fontSize: "1rem" }} />

          <Skeleton variant="text" width={90} sx={{ mb: 1.5 }} />
          <Skeleton variant="text" sx={{ mb: 1.5 }} />
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Skeleton variant="rectangular" width={100} height={20} />

          <Skeleton variant="circular" width={30} height={30} />

          <Skeleton variant="circular" width={30} height={30} />
        </CardActions>
      </Card>
    </Grid>
  ));
};
export const LoadingPlaceHolderTodo = () => {
  return (
    <Container>
      <Grid container>
        <Grid xs={12} item>
          <Card sx={{ mx: 1 }} elevation={0}>
            <CardContent>
              <Skeleton
                variant="text"
                width={300}
                height={40}
                sx={{ fontSize: "1rem" }}
              />

              <Skeleton
                variant="text"
                width={90}
                height={35}
                sx={{ mb: 1.5 }}
              />
              <Skeleton
                variant="text"
                height={30}
                width={120}
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton height={200} variant="text" sx={{ mb: 1.5 }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
