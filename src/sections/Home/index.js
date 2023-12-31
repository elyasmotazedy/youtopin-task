import { removeTodo } from '@/api/todo';
import { setEditData } from '@/redux/slices/todo';
import { useDispatch } from 'react-redux';
import IsDone from '@/components/IsDone';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Link,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoItem = ({ item }) => {
  const { title, id, done, description } = item;
  const dispatch = useDispatch();
  const deleteTodo = (id) => {
    if (window.confirm('Are sure you want to delete this item?')) {
      dispatch(removeTodo(id));
    }
  };

  return (
    <Card sx={{ mx: 1 }}>
      <CardContent>
        <Typography variant="h5" component="h1" gutterBottom>
          {title}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <IsDone item={item} />
        </Typography>
        <Typography variant="body2" noWrap>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Link href={`/todo/${id}`} underline="none">
          See More
        </Link>
        <IconButton
          aria-label="edit"
          color="default"
          onClick={() => dispatch(setEditData(item))}
        >
          <EditIcon />
        </IconButton>
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
