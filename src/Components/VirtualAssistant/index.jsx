function VirtualAssistant() {
    return(
        <div className="w-[45%] bg-white border-l p-6 flex flex-col">
            <div className="flex-grow overflow-y-auto space-y-4">
            {/* Chat Messages */}
            {[{
                role: "assistant",
                content: "Hi team 👋"
            }, {
                role: "user",
                content: "Anyone on for lunch today"
            }, {
                role: "assistant",
                content: "I'm down! Any ideas??"
            }].map((message, index) => (
                <div
                key={index}
                className={`p-4 rounded-lg max-w-[70%] ${message.role === "assistant" ? "bg-blue-100 self-start" : "bg-green-100 self-end"}`}
                >
                {message.content}
                </div>
            ))}
            </div>
            <div className="mt-4">
            <input
                type="text"
                placeholder="Start typing..."
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            </div>
        </div>
    )
}