import { createContext } from 'react';
  
export const CreateApiCohere = createContext()

export const CreateApiCohereProvider = ({ children }) => {

    async function getCohereChatResponse(prompt) {
        const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 15000)
    
        try {
            const response = await fetch('https://api.cohere.com/v2/chat', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'command-r-plus-08-2024',
                    messages: [{ role: 'user', content: prompt }],
                    stream: false
                }),
                signal: controller.signal
            })
    
            clearTimeout(timeoutId)
    
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error?.message}`)
            }
    
            const data = await response.json()
    
            if (!data.message || !data.message.content) {
                throw new Error('La respuesta de la API no tiene el formato esperado.')
            }
    
            return data.message.content
        } catch (error) {
            clearTimeout(timeoutId)
            if (error.name === 'AbortError') {
                throw new Error('La solicitud tardó demasiado en responder.')
            }
            console.error('Error en getCohereChatResponse:', error)
            throw error
        }
    }

    // async function obtenerRespuesta() {
    //     const resultado = await getCohereChatResponse('Hola, ¿cómo estás?');
    
    //     // Suponiendo que el resultado es un array con objetos
    //     console.log(resultado[0].text); // Accedes al texto de la respuesta
    // }
    // obtenerRespuesta();
    
    
    return (
        <CreateApiCohere.Provider
            value={{
                getCohereChatResponse
            }}
        >
            {children}
        </CreateApiCohere.Provider>
    )
}