/**
 * Filtra un array de tareas y completa/incompleta una tarea con el ID especificado.
 *
 * @param {Array} tasks - Un array de objetos, donde cada objeto representa una tarea.
 * @param {number} id - El ID de la tarea que esta completa/incompleta.
 * @returns {Array} - Un nuevo array de tareas con la tarea completa/incompleta que tenía el ID especificado.
 */

export const toggleTaskCompletion = (id, tasks, setTasks) => {
    const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
};

/**
 * Filtra un array de tareas y elimina la tarea con el ID especificado.
 *
 * @param {Array} tasks - Un array de objetos, donde cada objeto representa una tarea.
 * @param {number} id - El ID de la tarea que se desea eliminar.
 * @returns {Array} - Un nuevo array de tareas sin la tarea que tenía el ID especificado.
 */

export const deleteTask = (id, tasks, setTasks) => {
    const array = tasks.filter(task => task.id !== id)
    setTasks(array)
}