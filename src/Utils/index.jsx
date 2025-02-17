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


/**
 * Llamado a una API como asistente virtual
 *
 * @param {Function} getCohereChatResponse - Es el llamado a una funcion en Context/apiContext.jsx que hace el llamado a la API de Cohere.
 * @param {Text} text - Es el texto Ingresado por el usuario para que la API le de una respuesta relacionada.
 * @returns {Text} - Una actualizacion a un estado global el cual se usa para mostrar la respuesta de la API al usuario.
 */

export async function getResposeApi(getCohereChatResponse, text) {
    try {
        const respuesta = await getCohereChatResponse(text)
        return respuesta[0].text
    } catch (error) {
        console.error('Error al obtener la respuesta:', error.message)
        // Aquí puedes mostrar el error en la interfaz de usuario o tomar otra acción
    }
}

/**
 * Funcion para fecha actual
 *
 * @returns {Text} - La funcion retorna la fecha actual en 'es-ES'.
 */

export function getDate() {
    const fecha = new Date() 

    const dia = String(fecha.getDate()).padStart(2, '0')
    const mes = String(fecha.getMonth() + 1).padStart(2, '0')
    const año = fecha.getFullYear()

    return `${dia}/${mes}/${año}`
}


/**
 * Funcion para la hora actual
 *
 * @returns {Text} - La funcion retorna la hora actual 12:00 horas.
 */
export function getFormattedTime() {
    return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    }).format(new Date());
}