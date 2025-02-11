import { createContext, useState, useEffect } from 'react';

export const CreateListTask = createContext()

export const CreateListTaskProvider = ({ children }) => {
    const [modal, setModal] = useState(false)

    const [inputFilter , setInputFilter] = useState('')

    const [filterListTask, setFilterListTask] = useState([])

    const [tasks, setTasks] = useState([])

    const addTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const filterTask = (tasks, inputFilter) => {
        return tasks?.filter(task => task.task.toLowerCase().includes(inputFilter.toLowerCase()))
    }

    useEffect(() => {
        if (inputFilter) {
            setFilterListTask(filterTask(tasks, inputFilter));
        } else {
            setFilterListTask(tasks);
        }
    }, [tasks, inputFilter]);

    return (
        <CreateListTask.Provider
            value={{
                modal,
                setModal,
                addTask,
                tasks,
                setTasks,
                inputFilter,
                setInputFilter,
                filterListTask
            }}
        >
            {children}
        </CreateListTask.Provider>
    )
}