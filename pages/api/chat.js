import axios from 'axios'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body
    
    try {
      // Replace this with your actual AIML API URL
      const aimlAPIUrl = 'https://api.aimlapi.com/ask'; 

      // Construct the API request payload according to the AIML API documentation
      const payload = {
        key: 'fdf2f16dd86c4e4aafb8cc16e494d00f',  // Use your AIML API key here
        query: message,
      }

      // Sending the request to AIML API
      const response = await axios.post(aimlAPIUrl, payload)

      // Extracting the response from AIML API
      const answer = response.data.answer

      // Sending back the AIML response to the frontend
      res.status(200).json({ response: answer })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error processing request' })
    }
  } else {
    res.status(405).end()  // Method Not Allowed for non-POST requests
  }
}
