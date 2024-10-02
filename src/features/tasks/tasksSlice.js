import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        { id: 1, title: 'Learn React', description: 'Study components and hooks', priority: 'High', status: 'To-Do' },
        { id: 2, title: 'Learn Redux', description: 'Understand state management with Redux', priority: 'Medium', status: 'In Progress' },
    ],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        editTask: (state, action) => {
            const { id, title, description, priority, status } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.title = title;
                task.description = description;
                task.priority = priority;
                task.status = status;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
    },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;