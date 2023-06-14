import { chageTodoDone } from '@/api/todo';
import { useDispatch } from 'react-redux';
import { IconButton, Tooltip, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';

const IsDone = ({ item }) => {
  const { done } = item;
  const dispatch = useDispatch();
  return (
    <>
      {done ? (
        <Typography component="span" color="green">
          Done
        </Typography>
      ) : (
        <Typography component="span" color="red">
          Not Done
        </Typography>
      )}
      {!done ? (
        <Tooltip
          title="Mark as Done"
          onClick={() => dispatch(chageTodoDone({ ...item, done: true }))}
        >
          <IconButton>
            <CheckIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip
          title="Change to Not Done"
          onClick={() => dispatch(chageTodoDone({ ...item, done: false }))}
        >
          <IconButton>
            <RemoveDoneIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default IsDone;
