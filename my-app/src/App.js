import { useState } from 'react'
import './App.css';
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: '05 / Feb at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Meeting',
        day: '06 / Feb at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: '05 / Feb at 2:30pm',
        reminder: false,
    }
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*1000+1)
  console.log(id)
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}


// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  console.log(id)
}

  return (
    <div className = 'container'>
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('All Caught Up!')}
    </div>
  )

}



export default App;



