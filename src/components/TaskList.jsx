import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';

const TaskList = ({ status, onEdit }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">{status}</h2>
      {filteredTasks.length === 0 ? (
        <p className="text-sm text-gray-600">No tasks in {status}</p>
      ) : (
        filteredTasks.map(task => <TaskCard key={task.id} task={task} onEdit={onEdit} />)
      )}
    </div>
  );
};

export default TaskList;