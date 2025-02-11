import { useContext } from 'react'
import { CreateListTask } from '../../Context'
import { toggleTaskCompletion, deleteTask } from '../../Utils/index.jsx'

function Doing() {
    const context = useContext(CreateListTask);

    return (
        <>
            {context.tasks.map((task) => (
                <li
                    key={task.id}
                    className={`${task.completed ? 'flex' : 'hidden' } items-center justify-between my-[12px] p-3 bg-white rounded-lg shadow-sm`}
                >
                    <div className="flex items-center">
                        {/* Checkbox para marcar la tarea como completada */}
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(task.id, context.tasks,context.setTasks)}
                            className="w-5 h-5 mr-3  overflow-hidden rounded border-gray-300 text-teal-100 focus:ring-teal-100"
                        />
                        <div>
                            <h3 className={`text-lg font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                {task.task}
                            </h3>
                            <p className={`text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-500'}`}>
                                {task.description}
                            </p>
                        </div>
                    </div>
                    <div className="hover:text-3xl text-2xl cursor-pointer" onClick={() => deleteTask(task.id, context.tasks,context.setTasks)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                            <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </li>
            ))}
        </>
    )
}

export { Doing }
