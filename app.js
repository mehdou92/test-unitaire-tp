const express = require('express');
const getRoom = require('./api.js').getRoom;

const app = express();


app.get('/salle', async (req, res) => {
    const result = await getRoom();
    console.log("TOTOTOTO", result.data);
});

app.get('/post', async (req, res) => {
    
})


  const PORT = 5000;
  
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  });