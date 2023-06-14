import { removeTodos } from '@/redux/slices/todo';

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';

const TodoItem = ({ title, id }) => {
  const dispatch = useDispatch();
  const deleteTodo = (id) => {
    dispatch(removeTodos(id));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h1" gutterBottom>
          {title}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => deleteTodo(id)}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TodoItem;
