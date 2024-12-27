/*F1_API.js*/
const express = require('express'); 
const cors = require('cors');
const app = express(); 
const router = require('./scripts/router.js'); 
let PORT = process.env.PORT || 8080;

app.use(cors);
app.use(router);

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

