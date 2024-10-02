import { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
  const [taskToEdit, setTaskToEdit] = useState(null); 

  const handleEdit = (task) => {
    setTaskToEdit(task); 
  };

  const clearEdit = () => {
    setTaskToEdit(null); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8">Task Management Dashboard</h1>
      <TaskForm taskToEdit={taskToEdit} clearEdit={clearEdit} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <TaskList status="To-Do" onEdit={handleEdit} />
        <TaskList status="In Progress" onEdit={handleEdit} />
        <TaskList status="Done" onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default Dashboard;