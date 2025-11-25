const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

//middlewares basiques
app.use(cors());
app.use(express.json());

//route simple
app.get('/', (req, res) => {
    res.json({ message: 'vite et gourmand api' });
})

//Demarrer le serveur
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = app;