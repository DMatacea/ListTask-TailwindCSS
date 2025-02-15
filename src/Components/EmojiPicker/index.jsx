import { useEffect, useRef } from "react"
import "emoji-picker-element"

export default function EmojiPicker({ onEmojiSelect }) {
    const emojiPickerRef = useRef(null)

    useEffect(() => {
        const emojiPicker = emojiPickerRef.current

        const handleEmojiClick = (event) => {
            if (onEmojiSelect) {
                onEmojiSelect(event.detail.unicode)
            }
        };

        emojiPicker.addEventListener("emoji-click", handleEmojiClick)

        // Limpiar el evento al desmontar el componente
        return () => {
            emojiPicker.removeEventListener("emoji-click", handleEmojiClick)
        };
    }, [onEmojiSelect])

    return (
        <div className="emoji-picker-container">
            <emoji-picker ref={emojiPickerRef} class="dark" locale="es"></emoji-picker>
        </div>
    );
}

export { EmojiPicker }