// Importing the Express module
const express = require('express');

// Creating an instance of the Express application
const app = express();

// Defining the port number on which the server will listen
const port = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Route to handle the HTMX GET request
// When a GET request is made to '/user-info', this route sends a simple HTML response
app.get('/user-info', (req, res) => {
  res.send(`
    <div>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
    </div>
  `);
});

// Route to handle the HTMX POST request
// When a POST request is made to '/submit-info', this route extracts 'name' and 'email' from the request body and sends them back as an HTML response
app.post('/submit-info', (req, res) => {
  const { name, email } = req.body;
  res.send(`
    <div>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
    </div>
  `);
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
