import Link from "next/link";
import "./TaskCard.css"

function TaskCard({ task }) {
  return (
    <Link href={`/tasks/${task._id}`}>
      <div className='card'>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
    </Link>
  )
}

export default TaskCard