import { useContext, useState } from "react"
import { CreateApiCohere } from "../../Context/apiContext"
import { getResposeApi } from "../../Utils/index.jsx"
import { MessageList } from "../MessageList/index.jsx"
import { EmojiPicker } from "../EmojiPicker"

function VirtualAssistant() {
  const context = useContext(CreateApiCohere)
  const [inputText, setInputText] = useState("")
  const [messages, setMessages] = useState([])
  const [activateEmoji, setActivateEmoji] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleEmojiSelect = (emoji) => {
    setInputText((prevText) => prevText + emoji)
  }

  const handleApiResponse = async () => {
    if (!inputText.trim() || isLoading) return
    const text = inputText
    setInputText("")

    setIsLoading(true)

    const userMessage = { text: text, sender: "user" }
    setMessages((prevMessages) => [...prevMessages, userMessage])

    const apiResponse = await  getResposeApi(context.getCohereChatResponse, inputText)
    const botMessage = { text: apiResponse, sender: "bot" }
    setMessages((prevMessages) => [...prevMessages, botMessage])

    setIsLoading(false)
  }

  const adjustTextareaHeight = (element) => {
    element.style.height = "auto"
    element.style.height = `${Math.min(element.scrollHeight, 120)}px`
  }
  

  return (
    <aside className="w-[45vw] max-h-[calc(100vh-104px)] h-full flex flex-col bg-white relative">
      <div className="max-h-[calc(100%-48px)] h-full px-[8px] w-full overflow-y-auto">
        <MessageList messages={messages} />
      </div>

      {activateEmoji && (
        <>
            <button className="absolute top-28 left-96" onClick={() => setActivateEmoji(false)}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="absolute flex bottom-[60px] left-4 z-50 bg-white shadow-md border rounded-lg">
                <EmojiPicker onEmojiSelect={handleEmojiSelect} />
            </div>
        </>
      )}

        <div className="h-auto flex flex-row items-center justify-center p-3 bg-white shadow-lg w-full border-t border-zinc-200 relative z-10">
            <button
                onClick={() => setActivateEmoji(!activateEmoji)}
                disabled={isLoading}
                className={`${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
                </svg>
            </button>

            <textarea
                value={inputText}
                onChange={(e) => {
                setInputText(e.target.value)
                adjustTextareaHeight(e.target)
                }}
                placeholder="Escribe algo..."
                className="w-full px-2 border-none focus:outline-none resize-none overflow-hidden"
                disabled={isLoading}
                rows="1"
                style={{ maxHeight: "120px" }}
                onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleApiResponse()
                }
                }}
                ref={(el) => {
                if (el) adjustTextareaHeight(el)
                }}
            />

            <button
                onClick={handleApiResponse}
                disabled={isLoading}
                className={`${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
                </svg>
            </button>
        </div>
    </aside>
  )
}

export { VirtualAssistant }
