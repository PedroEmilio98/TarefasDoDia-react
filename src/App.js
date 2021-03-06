import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

function App() {

  const [tasks, setTasks] = useState([])
  const handleTaskAdd = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }];
    setTasks(newTasks);
  }
  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks);
  }
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      } else {
        return task
      }
    })
    setTasks(newTasks);
  }
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      setTasks(data);
    }
    fetchTasks();
  }, []);

  return (
    <Router>
      <div className="container">
        <h1 style={{ color: '#eee' }}>Tarefas do dia</h1>
        <Route path='/' exact render={() => (
          <div>
            <AddTask handleTaskAdd={handleTaskAdd} />
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} />
          </div>
        )} />
        <Route path='/:TaskTitle' exact component={TaskDetails} />
      </div>
    </Router>
  );
}

export default App;
