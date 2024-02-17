// Activate this server using node Nodescript.mjs in cmd.
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();


const PORT = process.env.PORT || 3000; // Use 3000 or another default port if running locally




let globalUsername = '';
// const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.post('/setusername', (req, res) => {
  const { username } = req.body;
  globalUsername = username; // Store the username in the global variable
  console.log('Received username:', globalUsername);
  res.json({ message: 'Username received successfully' });
});





// Enable CORS for all routes
app.use(cors());

// Define the base API URL
const apiUrl = 'https://alfa-leetcode-api.vercel.app';

// Define routes for different endpoints
app.get('/getusername', async (req, res) => {
  try {                          
   
    const response = await fetch(`${apiUrl}/${globalUsername}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/username/calendar', async (req, res) => {
  try {
    const response = await fetch(`${apiUrl}/${globalUsername}/calendar`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/username/daily', async (req, res) => {
  try {
    const response = await fetch(`${apiUrl}/daily`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/username/submission', async (req, res) => {
  try {
    const response = await fetch(`${apiUrl}/${globalUsername}/submission`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
