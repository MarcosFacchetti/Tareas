import Task from "./models/Task"
import TaskCard from "../components/TaskCard"
import { connectDB } from "../utils/mongoose"
import "./page.css"

async function loadTasks() {
  await connectDB(); // Esperar a que se establezca la conexión
  const tasks = await Task.find()
  return tasks
}

async function HomePage() {
  const tasks = await loadTasks()
  return (
    <div className="contenedor">
      {tasks.map(task => (
        <TaskCard task={task} key={task._id}/>
      ))}
    </div>
  )
}

export default HomePage
