import { getFormattedTime } from "../../Utils"

function Message({ message }) {
    const isUser = message.sender === "user"

    return (
        <div
            className={`rounded-lg max-w-xs w-auto ${
                isUser ? "bg-[#088395] ml-auto" : "bg-white"
            }`}
        >
            <div className="flex flex-col">
                <div className="flex flex-row">
                    {!isUser && (
                        <img
                            src="https://i.imgur.com/dECGXCz.png"
                            alt="ChatBot"
                            className="size-10"
                        />
                    )}
                    <p
                        className={`${
                            isUser
                                ? "text-white pt-3 pl-3"
                                : "text-[#2c2c2e] rounded-2xl bg-[#EBFBFE] mr-auto p-3"
                        }`}
                    >
                        {message.text}
                    </p>
                </div>
                {isUser && (
                    <p className="text-zinc-300 text-sm font-light ml-auto mr-2 pb-1">
                        {getFormattedTime()}
                    </p>
                )}
            </div>
        </div>
    );
}

function MessageList({ messages }) {
    return (
        <div className="max-h-[calc(100%-10px)] h-full space-y-4 overflow-y-auto">
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </div>
    );
}

export { MessageList }