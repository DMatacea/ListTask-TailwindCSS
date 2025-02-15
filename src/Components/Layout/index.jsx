import {  useContext, useState } from 'react'
import { CreateListTask } from '../../Context'
import { Modal } from '../Modal'
import { VirtualAssistant } from '../VirtualAssistant'

function Layout({ children }) {
  const context = useContext(CreateListTask)
  const [isFocused, setIsFocused] = useState(false);

    return (
      <div className='flex flex-row'>
        <div className="bg-[#eaefef] w-[55vw] h-[calc(100vh-109px)] px-[48px] py-[40px]">
              <div className="flex flex-col w-full h-full relative">
                <div className="relative w-full max-w-[278px] h-[40px] p-2 bg-white rounded-full border border-gray-300 focus-within:ring-1 focus-within:ring-teal-500 focus-within:border-teal-500 transition-all z-1">
                    <input
                        type="text"
                        value={context.inputFilter}
                        onChange={(e) => context.setInputFilter(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="block w-full bg-transparent focus:outline-none ml-3 placeholder-transparent"
                        placeholder="Search task"
                    />
                    <label
                        className={`absolute left-4 transition-all duration-200 ease-in-out ${
                            isFocused || context.filter
                                ? '-top-2.5 text-xs px-1 bg-[#eaefef] text-gray-400 rounded-lg'
                                : 'top-3 text-sm text-gray-400'
                        }`}
                    >
                        Search task
                    </label>
                </div>
                <div className="space-y-2 w-full">
                  <ul className='mt-[40px]'>  
                    {children}
                  </ul>
                </div>
                <button
                    className="h-[50px] bg-[#088395] text-white absolute bottom-0 right-0 px-3 rounded-[64px] shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.20)] justify-start items-center gap-2.5 inline-flex overflow-hidden hover:bg-zinc-200"
                    onClick={() => context.setModal(true)}
                    >
                    + ADD TASK
                </button>
              </div>
        </div>
        <VirtualAssistant/>
        <div className={`${context.modal === true ? 'flex': 'hidden'}`}>
          <Modal/>
        </div>
      </div>
      )
    }
  
  export { Layout }