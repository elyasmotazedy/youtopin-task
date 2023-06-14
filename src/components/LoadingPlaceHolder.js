import { Card, CardActions, CardContent, Grid, Skeleton } from '@mui/material';

const LoadingPlaceHolder = () => {
  const arr = [...Array(3).keys()];
  return arr.map((value) => (
    <Grid key={value} xs={4} sx={{ my: 4 }} item>
      <Card sx={{ mx: 1 }}>
        <CardContent>
          <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }} />

          <Skeleton
            variant="text"
            width={90}
            sx={{ fontSize: '1rem', mb: 1.5 }}
          />
          <Skeleton variant="text" sx={{ fontSize: '1rem', mb: 1.5 }} />
        </CardContent>
        <CardActions>
          <Skeleton variant="rectangular" width={100} height={20} />

          <Skeleton variant="circular" width={30} height={30} />

          <Skeleton variant="circular" width={30} height={30} />
        </CardActions>
      </Card>
    </Grid>
  ));
};

export default LoadingPlaceHolder;
