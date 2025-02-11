import { useState, useContext, useEffect } from "react"
import { CreateListTask } from "../../Context"

function Modal() {
    const context = useContext(CreateListTask)

    const [id, setId] = useState("")
    const [task, setTask] = useState("")
    const [description, setDescription] = useState("")
    const [completed, setCompleted] = useState(false)
    const [isTaskFocused, setIsTaskFocused] = useState(false);
    const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTask = {
            id: Date.now(),
            task,
            description,
            completed,
        };

        context.addTask(newTask)

        setId("");
        setTask("");
        setDescription("")
        setCompleted(false)

        context.setModal(false)
    };

    useEffect(() => {
      const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
              context.setModal(false);
          }
      };

      if (context.modal) {
          window.addEventListener('keydown', handleKeyDown);
      }

      return () => {
          window.removeEventListener('keydown', handleKeyDown);
      };
    }, [context.modal]);

    if (context.modal === false) return null

    return (
        <aside className={` fixed inset-0 round bg-black bg-opacity-50 flex items-center justify-center z-50`}>
            <div className="bg-white rounded-3xl h-[324px] w-[408px] shadow-xl">
                <h2 className="text-2xl p-[16px] font-medium">Añadir tarea</h2>
                <form onSubmit={handleSubmit} className="p-[16px]">
                  <div className="relative w-full mb-[16px]">
                      <input
                          type="text"
                          value={task}
                          onChange={(e) => setTask(e.target.value)}
                          onFocus={() => setIsTaskFocused(true)}
                          onBlur={() => setIsTaskFocused(false)}
                          className="w-full h-14 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                          required
                      />
                      <label
                          className={`absolute left-4 transition-all duration-200 ease-in-out ${
                              isTaskFocused || task
                                  ? '-top-2.5 text-xs bg-white px-1 text-blue-500'
                                  : 'top-4 text-sm text-gray-400'
                          }`}
                      >
                          Nombre de la tarea
                      </label>
                  </div>
                  <div className="relative w-full mb-[11px]">
                      <textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          onFocus={() => setIsDescriptionFocused(true)}
                          onBlur={() => setIsDescriptionFocused(false)}
                          className="w-full h-[98px] p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                          required
                      ></textarea>
                      <label
                          className={`absolute left-4 transition-all duration-200 ease-in-out ${
                              isDescriptionFocused || description
                                  ? '-top-2.5 text-xs bg-white px-1 text-blue-500'
                                  : 'top-4 text-sm text-gray-400'
                          }`}
                      >
                          Descripción
                      </label>
                  </div>
                  <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition"
                  >
                      AÑADIR
                  </button>
                </form>
                <button
                    onClick= {() => context.setModal(false)}
                    className="absolute top-2 right-2 bg-zinc-300 px-[6px] rounded-full text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>
            </div>
        </aside>
    )
}

export { Modal }