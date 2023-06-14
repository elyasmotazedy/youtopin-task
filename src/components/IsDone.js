import { chageTodoDone } from '@/api/todo';
import { useDispatch } from 'react-redux';
import { IconButton, Tooltip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';

const IsDone = ({ item }) => {
  const { done } = item;
  console.log('item', item);
  const dispatch = useDispatch();
  return (
    <>
      {done ? 'Done' : 'Not done'}
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
