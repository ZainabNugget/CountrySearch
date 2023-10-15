//init express and app
const express = require('express');
const app = express();
//Set the port to 5001
const PORT = process.env.PORT || 5001;
//Check if the port is working (and it does)
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});