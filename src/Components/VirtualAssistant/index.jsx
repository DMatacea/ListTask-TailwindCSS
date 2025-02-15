import { useContext, useState } from "react"
import { CreateApiCohere } from "../../Context/apiContext"
import { getResposeApi } from '../../Utils/index.jsx'
import { EmojiPicker } from "../EmojiPicker";

function VirtualAssistant() {
    const context = useContext(CreateApiCohere)
    const [text, setText] = useState("")
    const [apiResponse, setApiResponse] = useState("")

    const [activateEmoji, setActivateEmoji] = useState(false)
    
    const handleEmojiSelect = (emoji) => {
        setText((prevText) => prevText + emoji);
    };

    const handleApiResponse = () => {
        const response = getResposeApi(context.getCohereChatResponse, text)
        setApiResponse(response)
        console.log(response)
    }

    return(
        <aside className="w-[45vw] h-[calc(100vh-109px)] flex flex-col bg-white">
            <div className="h-[calc(100%-48px)] mb-[4px] w-full">
                {apiResponse}
            </div>
            <div className={`${activateEmoji ? 'flex' : 'hidden' }`}>
                <EmojiPicker onEmojiSelect={handleEmojiSelect} />
            </div>   
            <div className="h-[44px] flex flex-row items-center justify-center p-4 bg-white shadow-lg w-full border border-t-zinc-200">
                <button onClick={() => setActivateEmoji('True')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                    </svg>
                </button>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onBlur={() => setActivateEmoji(false)}
                    placeholder="Escribe algo..."
                    className="w-full h-[35px] p-2 border-none focus:outline-none resize-none"
                    rows="4"
                />
                <button onClick={handleApiResponse}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </button>
            </div>        
        </aside>
    )
}

export { VirtualAssistant }