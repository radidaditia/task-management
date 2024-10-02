import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/tasksSlice';

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return 'bg-red-200';
    case 'Medium':
      return 'bg-yellow-200';
    case 'Low':
      return 'bg-green-200';
    default:
      return 'bg-gray-100';
  }
};

const TaskCard = ({ task, onEdit }) => {
  const dispatch = useDispatch();
  const priorityColor = getPriorityColor(task.priority); 

  const handleDelete = () => {
    dispatch(deleteTask(task.id)); 
  };

  return (
    <div className={`p-4 ${priorityColor} rounded-lg shadow-md mb-4`}>
      <h3 className="text-lg font-bold">{task.title}</h3>
      <p className="text-sm text-gray-700">{task.description}</p>
      <p className="text-xs text-gray-500 mt-2">Priority: {task.priority}</p>
      <div className="mt-2 space-x-4">
        <button onClick={handleDelete} className="text-red-500 text-sm">Delete</button>
        <button onClick={() => onEdit(task)} className="text-blue-500 text-sm">Edit</button>
      </div>
    </div>
  );
};

export default TaskCard;