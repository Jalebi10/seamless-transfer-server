// This imports the Express framework, which makes building servers easier.
const express = require('express');
// Import the CORS middleware
const cors = require('cors');

// Create an instance of our application.
const app = express();

// --- NEW ---
// Use the CORS middleware to allow requests from our front-end
app.use(cors());
// Use express.json() to allow our server to read JSON data from requests
app.use(express.json());

// Define the port our server will listen on.
const PORT = 3001;

// --- THIS IS OUR NEW ENDPOINT ---
// It listens for POST requests at the '/api/create-transfer' URL
app.post('/api/create-transfer', (req, res) => {
  console.log('Received a transfer request!');
  // req.body contains the JSON data sent from the front-end
  console.log('Data:', req.body);
  
  // For now, we just send back a success message.
  // Later, this is where we will call the Transak API.
  res.status(200).json({ message: 'Transfer request received successfully.' });
});

// Start the server and make it listen for requests.
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});