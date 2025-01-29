import { useState } from 'react'

export default function SearchBox() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (input.trim()) {
      setLoading(true)

      try {
        // Sending the message to the backend (API route) for AIML processing
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        })

        const data = await res.json()
        setResponse(data.response)  // Display the AIML response
      } catch (error) {
        setResponse('Error: Unable to process the message.')
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Message Blackbox..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>

      {response && <div><strong>AI Response:</strong> {response}</div>}
    </div>
  )
}
